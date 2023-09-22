import { Button, Skeleton, Space, Trigger } from '@arco-design/web-react'
import { IconCheckCircle, IconMore, IconPlus } from '@arco-design/web-react/icon'
import { useSize } from 'ahooks'
import * as classNames from 'classnames'
import { useMemo, useRef } from 'react'

interface Props {
  size?: 'large'
}

// const NFTCard = ({ id }: HTMLAttributes<HTMLElement>, ref: React.ForwardedRef<HTMLDivElement>) => {
const NFTCard = ({ size }: Props) => {
  const ref = useRef(null)
  const _size = useSize(ref)

  const imgSize = useMemo(() => {
    const width = _size?.width ?? 0
    const stable = `${width - 16}px`
    return {
      width: stable,
      height: stable
    }
  }, [_size])

  return (
    <div className="xyz-nft-card" ref={ref}>
      <dl>
        <dt>
          <img
            style={imgSize}
            src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
            alt=""
          />
          <img src="https://placebear.com/64/64" alt="" className="tag" />
          <div className="mask">
            <Space>
              <Button size="small">Buy Now</Button>
              <Button size="small" icon={<IconPlus />} />
            </Space>
          </div>
        </dt>
        {size === 'big' && (
          <dd className={size}>
            <section>
              <span>
                <label>
                  Town Star <IconCheckCircle style={{ color: '#feda03' }} />
                </label>
                <div>
                  <Trigger
                    popup={() => (
                      <ul className="xyz-nft-card-menu">
                        <li>Place floor bid</li>
                        <li>New bid</li>
                        <li>Buy now</li>
                      </ul>
                    )}
                    trigger="hover"
                  >
                    <Button size="mini" shape="circle">
                      <IconMore />
                    </Button>
                  </Trigger>
                </div>
              </span>
              <span>Kobe No.1</span>
            </section>
            <section>
              <div>
                <span>From</span>
                <span>0.0043 ETH</span>
              </div>
              <div>
                <span>Highest bid</span>
                <span>no bids yet</span>
              </div>
            </section>
          </dd>
        )}
        {size === 'small' && (
          <dd className={size}>
            <div className="xyz-nft-card-info">
              <span>Kobe No.1</span>
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
                  <IconMore />
                </Button>
              </Trigger>
            </div>
          </dd>
        )}
      </dl>
    </div>
  )
}

// export default React.forwardRef(NFTCard)
export default NFTCard

export const NFTCardLoading = ({ size }: Props) => {
  const ref = useRef(null)
  const _size = useSize(ref)

  const divSize = useMemo(() => {
    const width = _size?.width ?? 0
    const stable = `${width - 16}px`
    return {
      width: stable,
      height: stable
    }
  }, [_size])

  return (
    <div className={classNames('xyz-nft-card-loading', { [size]: size })} ref={ref}>
      <Skeleton className="img-loading" loading animation text={{ rows: 1 }} style={divSize} />
      <Skeleton className="info-loading" loading animation text={{ rows: 2 }} />
      {size !== 'small' && <Skeleton className="price-loading" loading animation text={{ rows: 1 }} />}
    </div>
  )
}
