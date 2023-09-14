import { DropDown, DropDownItem } from '@/components/common/DropDown'
import { IconHeart } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'

function Creating() {
  const navigate = useNavigate()
  return (
    <DropDown
      entry={
        <strong className="xyz-header-creating-entry">
          <IconHeart /> Start Creating
        </strong>
      }
      wrapClassNames="xyz-header-creating"
    >
      <DropDownItem content={<span onClick={() => navigate('/user/owned')}>NFT</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/collections')}>Collection</span>} />
      <DropDownItem content={<span onClick={() => navigate('/user/marketplace')}>Marketplace</span>} />
    </DropDown>
  )
}

export default Creating
