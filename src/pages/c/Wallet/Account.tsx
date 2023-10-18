import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAccount, useDisconnect, useNetwork } from 'wagmi'

import { hideString } from '@/utils/tools'

function Account() {
  const { address, connector } = useAccount()
  const { chain } = useNetwork()
  const { disconnect } = useDisconnect()

  return (
    <ul className="">
      <li>{chain?.name}</li>
      <li>{address && hideString(address, 7, 5)}</li>
      <li>
        <CopyToClipboard text={address} onCopy={() => console.info('Copy successfully')}>
          <span>copy</span>
        </CopyToClipboard>
      </li>
      <li>
        <span onClick={() => window.open(`${chain?.blockExplorers?.etherscan?.url}/address/${address}`)}>view</span>
      </li>
      <li>
        <span onClick={disconnect}>disconnect</span>
      </li>
    </ul>
  )
}

export default Account
