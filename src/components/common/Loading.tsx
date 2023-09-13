import { IconLoading } from '@arco-design/web-react/icon'

export function Loading() {
  return (
    <section className="xyz-loading-wrap">
      <IconLoading style={{ fontSize: 20 }} />
      <small>loading...</small>
    </section>
  )
}

export function LoadingNull() {
  return <span className="xyz-loading-null">Nothing found</span>
}
