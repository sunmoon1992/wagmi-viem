import { nftCardSizeAtom } from '@/atoms/useNftCardSize'
import { ViewOptions } from '@/pages/c/ViewOptions'
import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { NFTsCard } from '@/pages/explore/c/NFTsCard'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { ProjectInfo } from '@/pages/explore/c/ProjectInfo'
import { TypeOptions } from '@/pages/explore/c/TypeOptions'
import { OtherOptions } from '@/pages/user/c/OtherOptions'
import { SortOptions } from '@/pages/user/c/SortOptions'
import { userOwnedOrSaleOptions } from '@/pages/user/config'
import { Affix, Button, Collapse, Space } from '@arco-design/web-react'
import { IconRight, IconToLeft, IconToRight } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import { useAtom } from 'jotai'
import { useState } from 'react'

const CollapseItem = Collapse.Item

function Sale() {
  const [toggle, setToggle] = useState<boolean>(true)
  const [nftCardSize] = useAtom(nftCardSizeAtom)

  return (
    <section className="xyz-user-sale">
      <div className="xyz-user-sale-filter">
        <Space size="large">
          <Button icon={toggle ? <IconToRight /> : <IconToLeft />} onClick={() => setToggle(!toggle)}>
            Filters
          </Button>
          <SortOptions options={userOwnedOrSaleOptions} />
          <ViewOptions handleClick={() => null} />
        </Space>
      </div>
      <div className="xyz-user-sale-inner">
        <div className={classNames('xyz-left-filters', toggle ? 'open' : 'close')}>
          <div className="xyz-left-filters-inner">
            <Affix offsetTop={104}>
              <div className="collapse-wrap">
                <section className="collapse-wrap-scroll">
                  <Collapse expandIcon={<IconRight style={{ fontSize: '12px' }} />} defaultActiveKey={['collections']}>
                    <CollapseItem header="Blockchain" name="blockchain">
                      <ChainOptions />
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

export default Sale
