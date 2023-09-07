import { useAccount } from 'wagmi'

import { DropDown, DropDownItem } from '@/components/common/DropDown'
import Avatar from '@/pages/c/Wallet/Avatar'

function Account() {
  const { address } = useAccount()

  return (
    <DropDown entry={<Avatar account={address} onClick={() => null} />} wrapClassNames="xyz-header-personal">
      <DropDownItem content={'Profile'} />
      <DropDownItem content={'My NFTs'} />
      <DropDownItem content={'My Collections'} />
      <DropDownItem content={'My Bids'} />
      <DropDownItem content={'Followings'} />
      <DropDownItem content={'Settings'} />
    </DropDown>
  )
}

export default Account
