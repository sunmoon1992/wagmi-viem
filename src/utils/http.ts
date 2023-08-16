import { isEmpty } from 'lodash'

import { API_PREFIX_URL } from '@/config'
import { Rec } from '@/typings'

type HttpResponse = Rec & Response
export type RequestParams = Record<string, string | number>

type Params = RequestParams | undefined

// get request parameters
const combineUrl = (url: string, params: Params) => {
  if (params) {
    const paramsArr = Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key].toString())}`)
    if (url.search(/\?/) === -1) return typeof params === 'object' ? `${url}?${paramsArr.join('&')}` : url
    return `${url}&${paramsArr.join('&')}`
  }
  return url
}

// the request timed out - promise
// const controller = new AbortController()
const timedOutPromise = (delay: number): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = new Response(
        JSON.stringify({
          code: 500,
          msg: 'timed-out',
          data: null
        })
      )
      resolve(response)
      // controller.abort()
    }, delay)
  })
}

// whether it is an external link
const externalLink = (url: string): string => {
  const host = /^https?:\/\/([a-zA-Z]*)(\w)+/
  return host.test(url) ? url : `${API_PREFIX_URL}${url}`
}

export async function http(request: Request, latency = false): Promise<HttpResponse> {
  const start = Date.now()

  return Promise.race([timedOutPromise(5000), fetch(request)])
    .then(async (res) => {
      const json = await res.json()
      return latency ? { ...json, latency: start - Date.now() } : json
    })
    .catch(() => null)
}

export async function get(
  path: string,
  params?: RequestParams,
  args?: RequestInit,
  latency = false
): Promise<HttpResponse> {
  const _path = combineUrl(externalLink(path), params)
  return await http(new Request(_path, { ...args, method: 'get' }), latency)
}

export async function post(
  path: string,
  body?: Record<string, unknown>,
  args?: RequestInit,
  latency = false
): Promise<HttpResponse> {
  const headers = new Headers()
  const _body = isEmpty(body) ? '' : JSON.stringify(body)

  headers.append('Content-Type', 'application/json;charset=UTF-8')

  return await http(
    new Request(externalLink(path), {
      ...args,
      method: 'post',
      mode: 'cors',
      body: _body,
      headers
    }),
    latency
  )
}
