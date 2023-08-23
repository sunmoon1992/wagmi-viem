import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAccount, useDisconnect } from 'wagmi'

import Button from '@/components/Button'
import { DropDown, DropDownItem } from '@/components/DropDown'
import Image from '@/components/Image'
import { EXPLORER_SCAN_URL } from '@/config'
import { hideString } from '@/utils/tools'
import { useMemo } from 'react'

const Account = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const entry = useMemo(() => {
    return (
      <Button icon="wallet" size="small" style={{ position: 'relative' }}>
        {address && hideString(address, 5, 4)}
      </Button>
    )
  }, [address])

  return (
    <DropDown entry={entry}>
      <DropDownItem
        content={
          <CopyToClipboard text={address} onCopy={() => console.info('Copy successfully')}>
            <>
              <Image src="copy.svg" className="wallet-icon" />
              Copy Address
            </>
          </CopyToClipboard>
        }
        className=""
      />
      <DropDownItem
        content={
          <a href={`${EXPLORER_SCAN_URL}/address/${address}`} target="_blank">
            <Image src="eye.svg" className="wallet-icon" />
            View In Explorer
          </a>
        }
      />
      <DropDownItem
        content={
          <span onClick={disconnect}>
            <Image src="log-out.svg" className="wallet-icon" />
            Disconnect
          </span>
        }
      />
    </DropDown>
  )
}

export default Account
