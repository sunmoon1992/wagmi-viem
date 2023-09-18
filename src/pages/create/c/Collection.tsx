import { Button, Drawer, Form, Input, Upload } from '@arco-design/web-react'
import { IconPlusCircle } from '@arco-design/web-react/icon'
import { useState } from 'react'

export const Collection = ({ type }: { type: '1155' | '721' }) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  return (
    <div className="collection">
      <label htmlFor="collection">Choose collection</label>
      <div className="bottom">
        <div className="card" onClick={() => setVisible(true)}>
          <IconPlusCircle />
          <span>Create ERC-{type}</span>
        </div>
        <div className="card">
          <img
            src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jRGFDWWlKSjlWVHFKS3pyVkdBUERMVVg2QzY2SkxSemZiNmszbk1BOXR0bw=="
            alt=""
          />
          <span>Rarible RARI</span>
        </div>
      </div>
      <Drawer
        width={400}
        title={<h3>Collection ERC-{type}</h3>}
        visible={visible}
        wrapClassName="xyz-create-collection-drawer"
        // placement='left'
        onOk={() => {
          setVisible(false)
        }}
        onCancel={() => {
          setVisible(false)
        }}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          onValuesChange={(v, vs) => {
            console.log(v, vs)
          }}
          onSubmit={(v) => {
            console.log(v)
          }}
        >
          <Form.Item field="media">
            <section className="media">
              <img
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
                alt=""
              />
              <div>
                <p>at least 300x300 pixels, max size 5MB, gif, jpeg, png</p>
                <Upload
                  action="/"
                  onChange={(fileList, file) => {
                    console.log(fileList, file)
                  }}
                >
                  <div className="xyz-create-nft-poster-upload-trigger">
                    <Button>Choose File</Button>
                  </div>
                </Upload>
              </div>
            </section>
          </Form.Item>
          <label htmlFor="name">Display Name</label>
          <Form.Item field="name">
            <Input placeholder="Enter collection name" />
            <p>
              <small>Token name cannot be changed in future</small>
            </p>
          </Form.Item>
          <label htmlFor="name">Symbol</label>
          <Form.Item field="symbol">
            <Input placeholder="Enter token symbol" />
          </Form.Item>
          <label htmlFor="description">Description</label>
          <Form.Item field="description">
            <Input placeholder="Spread some words about your token collection" />
          </Form.Item>
          <label htmlFor="url">Short URL</label>
          <Form.Item field="url">
            <Input placeholder="Enter short url" prefix="xx.com/" />
            <p>
              <small>Will be used as public URL</small>
            </p>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Create Collection</Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
