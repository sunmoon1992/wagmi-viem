import { Divider, Input, Select, Switch } from '@arco-design/web-react'
import { IconClockCircle, IconTag } from '@arco-design/web-react/icon'
import { useBoolean } from 'ahooks'
import * as classNames from 'classnames'
import { motion } from 'framer-motion'

export const Marketplace = ({ disabled }: { disabled?: boolean }) => {
  const [checked, { setTrue, setFalse }] = useBoolean(false)
  return (
    <div>
      <div className="marketplace">
        <div className="top">
          <div>
            <label className="large" htmlFor="markeyplace">
              Put on marketplace
            </label>
            <p>
              {checked ? (
                <small>Enter price to allow users instantly purchase your NFT</small>
              ) : (
                <small>Put your new NFT on Rarible&apos;s marketplace</small>
              )}
            </p>
          </div>
          <Switch
            type="round"
            checked={checked}
            onChange={(v) => {
              if (v) setTrue()
              else setFalse()
            }}
          />
        </div>
        <div className={classNames('bottom')}>
          <motion.div
            className="motion-div"
            initial={{ height: 0 }}
            animate={{ height: checked ? 'auto' : 0 }}
            transition={{ duration: 0.075 }}
          >
            <section>
              <div className="card default">
                <IconTag />
                <span>Fixed Price</span>
              </div>
              <div className={classNames('card', disabled ? 'disabled' : 'default')}>
                <IconClockCircle />
                <span>Timed Auction</span>
                {disabled && (
                  <p>
                    <small>Multiple NFTs (ERC-1155) doesn&apos;t support auctions</small>
                  </p>
                )}
              </div>
            </section>
            <div className="price">
              <div className="p-r">
                <label htmlFor="price">Price</label>
                <Input
                  addAfter={
                    <Select defaultValue="ETH">
                      <Select.Option value="ETH">ETH</Select.Option>
                      <Select.Option value="wETH">wETH</Select.Option>
                      <Select.Option value="USDC">USDC</Select.Option>
                    </Select>
                  }
                  placeholder="Enter price"
                />
                <em className="error">Price must be a number</em>
              </div>
              <div className="info">
                <div className="info-item">
                  <span>Price</span>
                  <span>1 ETH</span>
                </div>
                <div className="info-item">
                  <span>xxx Fee</span>
                  <span>1.00%</span>
                </div>
                <Divider />
                <div className="info-item">
                  <span>You will receive</span>
                  <span>1 ETH</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="expiration">Date of listing expiration</label>
              {/*TODO:自定义时间*/}
              <Input
                addAfter={
                  <Select defaultValue="1">
                    <Select.Option value="1">1Day</Select.Option>
                    <Select.Option value="7">7Day</Select.Option>
                    <Select.Option value="30">1Month</Select.Option>
                    <Select.Option value="90">3Months</Select.Option>
                  </Select>
                }
                placeholder="Enter price"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
