import { Button, Skeleton, Space, Trigger } from '@arco-design/web-react'
import { IconMore, IconPlus } from '@arco-design/web-react/icon'
import * as React from 'react'
import { HTMLAttributes } from 'react'

const NFTCard = ({ id }: HTMLAttributes<HTMLElement>, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="xyz-nft-card" id={id} ref={ref}>
      <dl>
        <dt>
          <img
            src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
            alt=""
          />
          <img src="https://opensea.io/static/images/logos/opensea-logo.svg" alt="" className="tag" />
          <div className="mask">
            <Space>
              <Button size="small">Buy Now</Button>
              <Button size="small" icon={<IconPlus />} />
            </Space>
          </div>
        </dt>
        <dd>
          <div className="xyz-nft-card-info">
            <span>Tom James Kobe KobeKobe</span>
            <span>Price: 1ETH</span>
          </div>
          <Trigger
            // popupVisible={visible3}
            popup={() => (
              <ul className="xyz-nft-card-menu">
                <li>Place floor bid</li>
                <li>New bid</li>
                <li>Buy now</li>
              </ul>
            )}
            trigger="hover"
            // onVisibleChange={(visible) => {
            //   console.info(visible);
            // }}
          >
            <Button size="small" shape="circle">
              <IconMore />
            </Button>
          </Trigger>
        </dd>
      </dl>
    </div>
  )
}

export default React.forwardRef(NFTCard)

export const NFTCardLoading = () => {
  return (
    <div className="xyz-nft-card-loading">
      <Skeleton className="img-loading" loading animation text={{ rows: 1 }} />
      <Skeleton className="info-loading" loading animation text={{ rows: 2 }} />
    </div>
  )
}
