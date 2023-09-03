import { DropDown, DropDownItem } from '@/components/common/DropDown'
import { IconHeart } from '@arco-design/web-react/icon'

function Creating() {
  return (
    <DropDown
      entry={
        <strong className="xyz-header-create">
          <IconHeart /> Start Creating
        </strong>
      }
    >
      <DropDownItem content={'NFT'} />
      <DropDownItem content={'Collection'} />
      <DropDownItem content={'Marketplace'} />
      <DropDownItem content={'NFT App'} />
    </DropDown>
  )
}

export default Creating
