import Image from '@/components/common/Image'
import { hideString } from '@/utils/tools'
import { Tag } from '@arco-design/web-react'
import { useAccount, useNetwork } from 'wagmi'

export const Network = () => {
  const { chain } = useNetwork()
  const { address, connector } = useAccount()
  return (
    <div className="network">
      <dl>
        <dt>
          <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTAuNSAyMS41QzQuNzAxMDEgMjEuNSAwIDE2Ljc5OSAwIDExQzAgNS4yMDA5OCA0LjcwMTAxIDAuNDk5OTY5IDEwLjUgMC40OTk5NjlDMTYuMjk5IDAuNDk5OTY5IDIxIDUuMjAwOTggMjEgMTFDMjEgMTYuNzk5IDE2LjI5OSAyMS41IDEwLjUgMjEuNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMTIxXzk1MDIpIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42MDEgMTEuMTJMMTAuNDk5NyA0LjQzNzQ3TDYuMzk5OTMgMTEuMTJMMTAuNDk5NyAxMy41Mjg5TDE0LjYwMSAxMS4xMlpNMTQuNjAxMSAxMS44ODU2TDEwLjQ5OTcgMTQuMjYzMUw2LjM5NzIzIDExLjg4MzJMMTAuNDk5NyAxNy41NTlMMTQuNjAxMSAxMS44ODU2WiIgZmlsbD0iI0ZERkVGRSIvPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzMxMjFfOTUwMiIgeDE9IjEwLjUiIHkxPSIwLjQ5OTk2OSIgeDI9IjEwLjUiIHkyPSIyMS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QjhDRUYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkI3MEVGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+Cg==" />
          <div className="account">
            <span>{address && hideString(address, 7, 5)}</span>
            <span>{chain?.name}</span>
          </div>
        </dt>
        <dd>
          <Tag color="green">connected</Tag>
        </dd>
      </dl>
    </div>
  )
}
