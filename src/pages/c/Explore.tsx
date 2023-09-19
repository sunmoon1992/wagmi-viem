import { DropDown, DropDownItem } from '@/components/common/DropDown'
import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

function Explore() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate(`/explore/${path}`)
  }

  return (
    <DropDown
      entry={<span className={classNames('a', { active: pathname.includes('/explore') })}>Explore</span>}
      wrapClassNames="xyz-header-explore"
    >
      <DropDownItem
        content={
          <span className="nav-item" onClick={() => handleClick('collections')}>
            Collections
          </span>
        }
      />
      <DropDownItem
        content={
          <span className="nav-item" onClick={() => handleClick('marketplaces')}>
            Marketplaces
          </span>
        }
      />
      <DropDownItem
        content={
          <span className="nav-item" onClick={() => handleClick('items')}>
            NFTs
          </span>
        }
      />
      <DropDownItem
        content={
          <span className="nav-item" onClick={() => handleClick('users')}>
            Users
          </span>
        }
      />
    </DropDown>
  )
}

export default Explore
