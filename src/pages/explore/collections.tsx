import Table, { TableItem } from '@/components/common/Table'
import { ChainOptions } from '@/pages/explore/c/ChainOptions'
import { DateOptions } from '@/pages/explore/c/DateOptions'
import { PriceOptions } from '@/pages/explore/c/PriceOptions'
import { thousandsSeparator } from '@/utils/tools'
import { Affix, Button, Collapse, Input, Space } from '@arco-design/web-react'
import { IconRight, IconSearch, IconToLeft, IconToRight } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import { times } from 'lodash'
import { useState } from 'react'

const CollapseItem = Collapse.Item

const data = times(100, function (i) {
  return {
    id: ++i,
    icon: 'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZnJUV1prRXpqS1R4ZzFldU0xaVFtTW51eDN0QVZkTjduelVicWY4Q0RGaw==',
    name: 'Moonbirds',
    price: '1.2345',
    priceChange: '-2.55%',
    volume: 1000255,
    volumeChange: '+2.6%',
    items: 255000,
    owners: 250005
  }
})

function Collections() {
  const [toggle, setToggle] = useState<boolean>(true)

  const columns = [
    {
      title: '#',
      width: 60,
      dataIndex: 'id',
      render: (_) => {
        return <span className="collections-id">{_}</span>
      }
    },
    {
      title: 'Collection',
      dataIndex: 'icon',
      render: (_, data) => {
        return (
          <Space size="medium">
            <img src={_} alt="" />
            <b>{data.name}</b>
          </Space>
        )
      }
    },
    {
      title: 'Floor Price',
      dataIndex: 'price',
      render: (_) => {
        return (
          <Space size="mini">
            {_}
            <span className="collections-unit">ETH</span>
          </Space>
        )
      }
    },
    {
      title: 'Floor Change',
      dataIndex: 'priceChange',
      render: (_) => {
        return <span className="collections-fall">{_}</span>
      }
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      render: (_) => {
        return (
          <Space size="mini">
            {thousandsSeparator(_)}
            <span className="collections-unit">ETH</span>
          </Space>
        )
      }
    },
    {
      title: 'Volume Change',
      dataIndex: 'volumeChange',
      render: (_) => {
        return <span className="collections-rise">{_}</span>
      }
    },
    {
      title: 'Items',
      dataIndex: 'items',
      render: (_) => {
        return thousandsSeparator(_)
      }
    },
    {
      title: 'Owners',
      dataIndex: 'owners',
      render: (_) => {
        return thousandsSeparator(_)
      }
    }
  ]

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
        <div className="right">
          <Table
            // loading
            rowKey="id"
            data={data}
            columns={columns}
          >
            {(data, columns) => {
              return data.map((item, index) => <TableItem key={index} item={item} columns={columns} />)
            }}
          </Table>
        </div>
      </div>
    </section>
  )
}

export default Collections
