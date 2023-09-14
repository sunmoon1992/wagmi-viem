import { Upload } from '@arco-design/web-react'
import { IconUpload } from '@arco-design/web-react/icon'

function UploadPoster() {
  return (
    <div className="xyz-user-profile-poster">
      <div className="mask">
        <div className="xyz-user-profile-poster-upload-wrap">
          <Upload
            action="/"
            onChange={(fileList, file) => {
              console.log(fileList, file)
            }}
          >
            <div className="xyz-user-profile-poster-upload-trigger">
              <IconUpload />
            </div>
          </Upload>
        </div>
      </div>
      <img
        src="https://assets.raribleuserdata.com/prod/v1/image/t_cover_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1jNnpDa3pKWW9MYm40d2lDZHF0YUJVdnROUlR1WnVRaUhkakRlRmRkNlBnUA=="
        alt=""
      />
    </div>
  )
}

export default UploadPoster
