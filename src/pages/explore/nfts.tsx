import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { MarketOptions } from '@/pages/explore/c/MarketOptions'
import { NFTsCard } from '@/pages/explore/c/NFTsCard'
import { OtherOptions } from '@/pages/explore/c/OtherOptions'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { ProjectInfo } from '@/pages/explore/c/ProjectInfo'
import { StatusOptions } from '@/pages/explore/c/StatusOptions'
import { TypeOptions } from '@/pages/explore/c/TypeOptions'
import { Affix, Collapse, Input } from '@arco-design/web-react'
import { IconRight, IconSearch } from '@arco-design/web-react/icon'

const CollapseItem = Collapse.Item

function NFTs() {
  return (
    <section className="xyz-explore-nfts">
      <div className="xyz-search xyz-explore-nfts-search">
        <Input placeholder="Search by NFTs" suffix={<IconSearch />} />
      </div>
      <div className="xyz-explore-nfts-inner">
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
        <div className="right">
          <NFTsCard />
        </div>
      </div>
    </section>
  )
}

export default NFTs
