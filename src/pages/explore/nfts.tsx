import { nftCardSizeAtom } from '@/atoms/useNftCardSize'
import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { MarketOptions } from '@/pages/explore/c/MarketOptions'
import { NFTsCard } from '@/pages/explore/c/NFTsCard'
import { OtherOptions } from '@/pages/explore/c/OtherOptions'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { ProjectInfo } from '@/pages/explore/c/ProjectInfo'
import { SortOptions } from '@/pages/explore/c/SortOptions'
import { StatusOptions } from '@/pages/explore/c/StatusOptions'
import { TypeOptions } from '@/pages/explore/c/TypeOptions'
import { ViewOptions } from '@/pages/explore/c/ViewOptions'
import { Affix, Button, Collapse, Input, Space } from '@arco-design/web-react'
import { IconRight, IconSearch, IconToLeft, IconToRight } from '@arco-design/web-react/icon'
import * as classNames from 'classnames'
import { useAtom } from 'jotai'
import { useState } from 'react'

const CollapseItem = Collapse.Item

function NFTs() {
  const [toggle, setToggle] = useState<boolean>(true)
  const [nftCardSize] = useAtom(nftCardSizeAtom)

  return (
    <section className="xyz-explore-nfts">
      <div className="xyz-explore-nfts-filter">
        <Space size="large">
          <Button icon={toggle ? <IconToRight /> : <IconToLeft />} onClick={() => setToggle(!toggle)}>
            Filters
          </Button>
          <div className="xyz-search xyz-explore-nfts-search">
            <Input placeholder="Search by NFTs" suffix={<IconSearch />} />
          </div>
          <SortOptions />
          <ViewOptions handleClick={() => null} />
        </Space>
      </div>
      <div className="xyz-explore-nfts-inner">
        <div className={classNames(toggle ? 'open' : 'close')}>
          <div className="left">
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
                    <CollapseItem header="Marketplace" name="marketplace">
                      <MarketOptions />
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

export default NFTs
