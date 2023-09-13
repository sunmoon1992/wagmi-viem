import { Empty, EmptyProps } from '@arco-design/web-react'
import { IconFindReplace } from '@arco-design/web-react/icon'

export default function Null(props: EmptyProps) {
  return <Empty {...props} icon={<IconFindReplace />} description="Nothing found" />
}
