import { DropDown, DropDownItem } from '@/components/common/DropDown'
import { IconHeart } from '@arco-design/web-react/icon'

function Creating() {
  return (
    <DropDown
      entry={
        <strong className="xyz-header-creating-entry">
          <IconHeart /> Start Creating
        </strong>
      }
      wrapClassNames='xyz-header-creating'
    >
      <DropDownItem content={'NFT'} />
      <DropDownItem content={'Collection'} />
      <DropDownItem content={'Marketplace'} />
      <DropDownItem content={'NFT App'} />
    </DropDown>
  )
}

export default Creating
