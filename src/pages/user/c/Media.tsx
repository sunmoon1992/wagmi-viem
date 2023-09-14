import { Button, Space, Trigger } from '@arco-design/web-react'
import { IconFacebook, IconGithub, IconGoogle, IconTwitter } from '@arco-design/web-react/icon'

export function Media() {
  return (
    <Trigger
      popup={() => (
        <div className="xyz-user-buttons-share">
          <p>Share Link</p>
          <Space className="xyz-user-buttons-share">
            <Button size="small" icon={<IconTwitter />} />
            <Button size="small" icon={<IconGoogle />} />
            <Button size="small" icon={<IconFacebook />} />
            <Button size="small" icon={<IconGithub />} />
          </Space>
        </div>
      )}
      trigger="hover"
    >
      <Button size="small">Share</Button>
    </Trigger>
  )
}
