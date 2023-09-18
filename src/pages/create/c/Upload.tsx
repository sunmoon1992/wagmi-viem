import { Button, Upload } from '@arco-design/web-react'

export const ResourceUpload = () => {
  return (
    <div className="upload">
      <label htmlFor="upload">Upload file</label>
      <section>
        <Upload
          action="/"
          onChange={(fileList, file) => {
            console.log(fileList, file)
          }}
        >
          <div className="xyz-create-nft-poster-upload-trigger">
            <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
            <Button>Choose File</Button>
          </div>
        </Upload>
        <em className="error">File is required</em>
      </section>
    </div>
  )
}
