import { nftCardSizeAtom } from '@/atoms/useNftCardSize'
import { ViewOptions } from '@/pages/c/ViewOptions'
import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { NFTsCard } from '@/pages/explore/c/NFTsCard'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { ProjectInfo } from '@/pages/explore/c/ProjectInfo'
import { TypeOptions } from '@/pages/explore/c/TypeOptions'
import { OtherOptions } from '@/pages/user/c/OtherOptions'
import { SortOptions } from '@/pages/user/c/SortOptions'
import { StatusOptions } from '@/pages/user/c/StatusOptions'
import { userCreatedOptions } from '@/pages/user/config'
import { Affix, Button, Collapse, Input, Space } from '@arco-design/web-react'
import { IconRight, IconSearch, IconToLeft, IconToRight } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import { useAtom } from 'jotai'
import { useState } from 'react'

const CollapseItem = Collapse.Item

function Created() {
  const [toggle, setToggle] = useState<boolean>(true)
  const [nftCardSize] = useAtom(nftCardSizeAtom)

  return (
    <section className="xyz-user-created">
      <div className="xyz-user-created-filter">
        <Space size="large">
          <Button icon={toggle ? <IconToRight /> : <IconToLeft />} onClick={() => setToggle(!toggle)}>
            Filters
          </Button>
          <div className="xyz-search xyz-user-created-search">
            <Input placeholder="Search by NFTs" suffix={<IconSearch />} />
          </div>
          <SortOptions options={userCreatedOptions} />
          <ViewOptions />
        </Space>
      </div>
      <div className="xyz-user-created-inner">
        <div className={classNames('xyz-left-filters', toggle ? 'open' : 'close')}>
          <div className="xyz-left-filters-inner">
            <Affix offsetTop={104}>
              <div className="collapse-wrap">
                <section className="collapse-wrap-scroll">
                  <Collapse expandIcon={<IconRight style={{ fontSize: '12px' }} />} defaultActiveKey={['collections']}>
                    <CollapseItem header="Blockchain" name="blockchain">
                      <ChainOptions />
                    </CollapseItem>
                    <CollapseItem header="Status" name="status">
                      <StatusOptions />
                    </CollapseItem>
                    <CollapseItem header="Price" name="price">
                      <PriceOptions />
                    </CollapseItem>
                    <CollapseItem header="Type" name="type">
                      <TypeOptions />
                    </CollapseItem>
                    <CollapseItem header="Options" name="options">
                      <OtherOptions />
                    </CollapseItem>
                    <CollapseItem header="Collections" name="collections">
                      <ProjectInfo />
                    </CollapseItem>
                  </Collapse>
                </section>
              </div>
            </Affix>
          </div>
        </div>
        <div className={classNames('right', toggle ? 'less' : 'more')}>
          <NFTsCard size={nftCardSize} />
        </div>
      </div>
    </section>
  )
}

export default Created
