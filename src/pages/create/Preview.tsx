import { Affix } from '@arco-design/web-react'

export const Preview = () => {
  return (
    <Affix offsetTop={104}>
      <label htmlFor="preview">Preview</label>
      <div className="preview-box">
        <small>Upload file and choose collection to preview your brand new NFT</small>
      </div>
      <div className="content-box">
        <small>Unlockable content</small>
      </div>
    </Affix>
  )
}
