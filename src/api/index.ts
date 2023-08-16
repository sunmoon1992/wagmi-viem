import { Rec } from '@/typings'
import { get, post } from '@/utils/http'

export const x = async (params: Record<string, any>) => {
  const response = await get('x/x', params)
  return response
}

export const checkRpcHealthStatus = async (url: string, body: Rec) => {
  const response = await post(url, body, undefined, true)
  return response
}
