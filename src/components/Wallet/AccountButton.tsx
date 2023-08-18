import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAccount, useDisconnect } from 'wagmi'

import { EXPLORER_SCAN_URL } from '@/config'

const AccountButton = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <ul>
      <li>
        <CopyToClipboard text={address} onCopy={() => console.info('Copy successfully')}>
          <span>Copy Address</span>
        </CopyToClipboard>
      </li>
      <li>
        <a href={`${EXPLORER_SCAN_URL}/address/${address}`}>View In Explorer</a>
      </li>
      <li>
        <button onClick={disconnect}>Disconnect</button>
      </li>
    </ul>
  )
}

export default AccountButton
