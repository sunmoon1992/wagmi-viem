import { DropDown, DropDownItem } from '@/components/common/DropDown'
import Avatar from '@/pages/c/Wallet/Avatar'
import { useNavigate } from 'react-router-dom'

function Account() {
  const navigate = useNavigate()
  return (
    <DropDown entry={<Avatar onClick={() => null} />} wrapClassNames="xyz-header-personal">
      <DropDownItem content={<span onClick={() => navigate('/user/settings/profile')}>Profile</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/owned')}>My NFTs</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/collections')}>My Collections</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/owned')}>My Bids</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/owned')}>Followings</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/owned')}>Settings</span>} />
    </DropDown>
  )
}

export default Account
