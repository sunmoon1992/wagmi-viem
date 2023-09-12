import { Button, Skeleton, Space, Trigger } from '@arco-design/web-react'
import { IconMore, IconPlus } from '@arco-design/web-react/icon'
import * as React from 'react'
import { HTMLAttributes, useLayoutEffect, useMemo, useRef } from 'react'
import { useSize } from "ahooks";

// const NFTCard = ({ id }: HTMLAttributes<HTMLElement>, ref: React.ForwardedRef<HTMLDivElement>) => {
const NFTCard = () => {
  const ref = useRef(null);
  const size = useSize(ref);

  const imgSize = useMemo(() => {
    const width = size?.width ?? 0
    const stable = `${width - 16}px`
    return {
      width: stable,
      height: stable
    }
  }, [size])

  return (
    <div className="xyz-nft-card" ref={ref} id='test'>
      <dl>
        <dt>
          <img
            style={imgSize}
            src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
            alt=""
          />
          <img src="https://opensea.io/static/images/logos/opensea-logo.svg" alt="" className="tag"/>
          <div className="mask">
            <Space>
              <Button size="small">Buy Now</Button>
              <Button size="small" icon={<IconPlus/>}/>
            </Space>
          </div>
        </dt>
        <dd>
          <div className="xyz-nft-card-info">
            <span>Tom James Kobe KobeKobe</span>
            <span>Price: 1ETH</span>
          </div>
          <div className="more-btn">
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
               <IconMore/>
             </Button>

          </Trigger>    </div>
        </dd>
      </dl>
    </div>
  )
}

// export default React.forwardRef(NFTCard)
export default NFTCard

export const NFTCardLoading = () => {
  return (
    <div className="xyz-nft-card-loading">
      <Skeleton className="img-loading" loading animation text={{ rows: 1 }}/>
      <Skeleton className="info-loading" loading animation text={{ rows: 2 }}/>
    </div>
  )
}
