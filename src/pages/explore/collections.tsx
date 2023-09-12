import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { DateOptions } from '@/pages/explore/c/DateOptions'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { Affix, Button, Collapse, Input, Space } from '@arco-design/web-react'
import { IconRight, IconSearch, IconToLeft, IconToRight } from '@arco-design/web-react/icon'
import * as classNames from 'classnames'
import { useState } from 'react'

const CollapseItem = Collapse.Item

function Collections() {
  const [toggle, setToggle] = useState<boolean>(true)

  return (
    <section className="xyz-explore-collections">
      <div className="xyz-explore-collections-filter">
        <Space size="large">
          <Button icon={toggle ? <IconToRight /> : <IconToLeft />} onClick={() => setToggle(!toggle)}>
            Filters
          </Button>
          <DateOptions handleClick={() => null} />
          <div className="xyz-search xyz-explore-collections-search">
            <Input placeholder="Search by collection" suffix={<IconSearch />} />
          </div>
        </Space>
      </div>
      <div className="xyz-explore-collections-inner">
        <div className={classNames('xyz-left-filters', toggle ? 'open' : 'close')}>
          <div className="xyz-left-filters-inner">
            <Affix offsetTop={104}>
              <div className="collapse-wrap">
                <section className="collapse-wrap-scroll">
                  <Collapse expandIcon={<IconRight style={{ fontSize: '12px' }} />} defaultActiveKey={['blockchain']}>
                    <CollapseItem header="Blockchain" name="blockchain">
                      <ChainOptions />
                    </CollapseItem>
                    <CollapseItem header="Floor Price" name="price">
                      <PriceOptions simple />
                    </CollapseItem>
                  </Collapse>
                </section>
              </div>
            </Affix>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </section>
  )
}

export default Collections
