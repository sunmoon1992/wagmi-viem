import { Preview } from '@/pages/create/Preview'
import { Advanced } from '@/pages/create/c/Advanced'
import { Collection } from '@/pages/create/c/Collection'
import { Marketplace } from '@/pages/create/c/Marketplace'
import { Minting } from '@/pages/create/c/Minting'
import { Network } from '@/pages/create/c/Network'
import { Purchased } from '@/pages/create/c/Purchased'
import { ResourceUpload } from '@/pages/create/c/Upload'
import { Button, Input, Space } from '@arco-design/web-react'
import { useToggle } from 'ahooks'
import * as classNames from 'classnames'

const ERC721 = () => {
  const [status, { toggle }] = useToggle(false)
  return (
    <div>
      <p onClick={toggle}>Single edition on Ethereum</p>
      <div className="xyz-create-nft-inner">
        <div className="left">
          <Network />
          <ResourceUpload />
          <Marketplace />
          <Purchased />
          <Collection />
          <Minting />
          <div className="p-r">
            <label htmlFor="Name">Name</label>
            <Input />
            <em className={classNames('error', { active: status })}>Name is not allowed to be empty</em>
          </div>
          <div>
            <label htmlFor="Description">Description</label>
            <Input />
            <p>
              <small>With preserved line-breaks</small>
            </p>
          </div>
          <div>
            <label htmlFor="Royalties">Royalties</label>
            <Input suffix="%" />
            <p>
              <small>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</small>
            </p>
          </div>
          <Advanced />
          <Space className="submit" size="large">
            <Button size="large">Create Item</Button>
            <p>
              <small>( Attach file or add title to save your changes! )</small>
            </p>
          </Space>
        </div>
        <div className="right">
          <Preview />
        </div>
      </div>
    </div>
  )
}
export default ERC721
