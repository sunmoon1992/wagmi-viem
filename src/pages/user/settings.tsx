import { UploadAvatar } from '@/pages/user/c/Avatar'
import UploadPoster from '@/pages/user/c/UploadPoster'
import { Button, Form, Input } from '@arco-design/web-react'

const FormItem = Form.Item
const Settings = () => {
  const [form] = Form.useForm()
  return (
    <section className="xyz-user-settings">
      <h2>Settings</h2>
      <div className="xyz-user-settings-content">
        <div className="left">
          <span>Profile</span>
          <span>Account</span>
          <span>Wallets</span>
          <span>Notifications</span>
        </div>
        <div className="right">
          <div>
            <UploadPoster />
            <UploadAvatar />
          </div>
          <div className="bottom">
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
              <label className="label" htmlFor="Display Name">
                Display Name
              </label>
              <FormItem field="name">
                <Input placeholder="Enter your display name" />
              </FormItem>
              <label className="label" htmlFor="User Name">
                User Name<small>( your profile will be available on xxx.com/[username] )</small>
              </label>
              <FormItem field="name">
                <Input placeholder="Enter your user name" prefix="@" />
              </FormItem>
              <label className="label" htmlFor="Short bio">
                Short bio
              </label>
              <FormItem field="name">
                <Input placeholder="About you" />
              </FormItem>
              <FormItem>
                <Button htmlType="submit">Save Settings</Button>
              </FormItem>
            </Form>
            <dl>
              <dt>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMwIiBoZWlnaHQ9IjEzMCIgdmlld0JveD0iMCAwIDIzMCAxMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMjI4IiBoZWlnaHQ9IjEyOCIgcng9IjE0IiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjIyOSIgaGVpZ2h0PSIxMjkiIHJ4PSIxNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wOCIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjc5XzI3NDMyKSI+CjxwYXRoIGQ9Ik0yMDMuMTcgMTkzLjAyN0w4NC41OTAzIDkyLjc0NzhMMTQ1Ljc0OCAzMS41OTAzTDI1NSAxMzguNDgxTDIwMy4xNyAxOTMuMDI3WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzY3OV8yNzQzMikiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzY3OV8yNzQzMikiPgo8cGF0aCBkPSJNMTA2LjQ2NCAyNC4zNTY1QzExMC4xNDMgMTcuMjE0NSAxMjAuMzU1IDE3LjIxNDUgMTI0LjAzNCAyNC4zNTY1QzEyNi4yNDUgMjguNjQ4IDEzMS4yMzMgMzAuNzE0IDEzNS44MzEgMjkuMjQyOUMxNDMuNDgzIDI2Ljc5NDYgMTUwLjcwMyAzNC4wMTUxIDE0OC4yNTUgNDEuNjY3QzE0Ni43ODQgNDYuMjY0OSAxNDguODUgNTEuMjUyOCAxNTMuMTQyIDUzLjQ2MzhDMTYwLjI4MyA1Ny4xNDMzIDE2MC4yODMgNjcuMzU0NyAxNTMuMTQyIDcxLjAzNDJDMTQ4Ljg1IDczLjI0NTIgMTQ2Ljc4NCA3OC4yMzMxIDE0OC4yNTUgODIuODMxQzE1MC43MDMgOTAuNDgyOSAxNDMuNDgzIDk3LjcwMzQgMTM1LjgzMSA5NS4yNTUxQzEzMS4yMzMgOTMuNzg0IDEyNi4yNDUgOTUuODUgMTI0LjAzNCAxMDAuMTQyQzEyMC4zNTUgMTA3LjI4MyAxMTAuMTQzIDEwNy4yODMgMTA2LjQ2NCAxMDAuMTQyQzEwNC4yNTMgOTUuODUgOTkuMjY0OSA5My43ODQgOTQuNjY3IDk1LjI1NTFDODcuMDE1MSA5Ny43MDM1IDc5Ljc5NDYgOTAuNDgyOSA4Mi4yNDI5IDgyLjgzMUM4My43MTQgNzguMjMzMSA4MS42NDggNzMuMjQ1MiA3Ny4zNTY1IDcxLjAzNDJDNzAuMjE0NSA2Ny4zNTQ3IDcwLjIxNDUgNTcuMTQzMyA3Ny4zNTY1IDUzLjQ2MzhDODEuNjQ4IDUxLjI1MjggODMuNzE0IDQ2LjI2NDkgODIuMjQyOSA0MS42NjdDNzkuNzk0NiAzNC4wMTUxIDg3LjAxNTEgMjYuNzk0NiA5NC42NjcgMjkuMjQyOUM5OS4yNjQ5IDMwLjcxNCAxMDQuMjUzIDI4LjY0NzkgMTA2LjQ2NCAyNC4zNTY1WiIgZmlsbD0iI0ZFREEwMyIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMyLjc5NiA0OC43NjcxQzEzNC4yODUgNTAuMjAzMyAxMzQuMzI4IDUyLjU3NDkgMTMyLjg5MiA1NC4wNjQyTDExMC45MjkgNzYuODQwNkw5Ny41MjkgNjIuOTQ0MUM5Ni4wOTI5IDYxLjQ1NDggOTYuMTM2IDU5LjA4MzIgOTcuNjI1MyA1Ny42NDcxQzk5LjExNDcgNTYuMjEwOSAxMDEuNDg2IDU2LjI1NCAxMDIuOTIyIDU3Ljc0MzRMMTEwLjkyOSA2Ni4wNDY3TDEyNy40OTkgNDguODYzNEMxMjguOTM1IDQ3LjM3NDEgMTMxLjMwNyA0Ny4zMzEgMTMyLjc5NiA0OC43NjcxWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm4wIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+Cjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMF82NzlfMjc0MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTAuMzkwNjI1KSBzY2FsZSgwLjAyNSAwLjA0NDUzMTMpIi8+CjwvcGF0dGVybj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzY3OV8yNzQzMiIgeDE9Ijc1LjE4NzciIHkxPSIxOS4xMTgxIiB4Mj0iMTc5LjMyMSIgeTI9IjEzMC45MjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZFREEwMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRURBMDMiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY3OV8yNzQzMiI+CjxyZWN0IHdpZHRoPSIyMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXAxXzY3OV8yNzQzMiI+CjxyZWN0IHdpZHRoPSI4Ni40OTg3IiBoZWlnaHQ9Ijg2LjQ5ODciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MiAxOSkiLz4KPC9jbGlwUGF0aD4KPGltYWdlIGlkPSJpbWFnZTBfNjc5XzI3NDMyIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQURnRWxFUVZSWUNjMllDVXVVVVJTR0QwV0owbUpJRVpJVUdtcUVKRWFKSmlGSVpZSlpDZEtpSUZhR3RJSlVLaGFWSUVXS2xTYUlVbUtyWUVsSXRnbTVEQzQ1T0xta21ZTTdMamxvTG1ubTRCdlg4WnJ6NGRoODR6anovWU9INTU1ejNuc09UUzR0d09UeUQxQmJ2b1Y2WlQ0bXJQUHd4K1kxeHRlOXdyaHREc1kyWkdOczAzT01PanpCcUdNV1JyWmtZc1RsSVlhM3BXTm9leG9HZDZaaTBDTUZBMTczTU9DZGhINmZCUFR2dlFQVi9sdFErY2VqTHlBT1B3SnZvRGZvR25xUHhxSTdPQnJkb1ZmUUZYWUpYZUdSNkl5NGlNNno1OUZ4NFF6YUl5UFFkamtjYmRFbjBSSWJocGJyb2FCSmk0OVFXNzZiZ1p1WUJmZmJqc0c5d0tqRFU0dzZQZjRINTVxT1lRN25tWUtmWHZjeDRIMFgvVDZKMm5BSDQ5REg0WTVkUlU5d0RMcERvOUIxWWhiY09RMWN4eFRjYWJSRm4wTHJORnh6WEFoSXF1YWFiNGFnT2Y0NGlEK3IxTXd4T09YdEl5Q0RhczV6Z1RVMy9heHoxUnczeCtDVUNVRWdxWnBUSmdhaEtTa1FKS3BiUlp1TDB1NVdFZVlZM1Bma1F5QTJTcVRRcmJ6bXVMbW01TU5vVEEwQTZUWG5SSnNUekRrRHpEVStPSURHTkgrUTZEbTNiOVlRTm1UT3hXalBPVjNtR055M0REK1FjUk5DVUhQekpJU3dXM25OY1hNTkdYNW9lT1FMTWxkQy9NOWNRNll2NnJQMmdJeVRyY1kzeCtEcW4vbUFwb0xmaE5tcXJ6a0dWNWZ0RFZyWXIyVHh6REc0dXB6ZElGUDlTc1NhWTNDMXVWNGd3LzV6aTIrdU5uY1hhdkk4UUlPTC9KOHoxRnh0bmllcTg5MUI0bjdDQW5NTFNJaXBPVGM5U25oRGFKNVZZNjc2alR1cTMrOEF6ZnlFVFp3UWZNN053TDNVMUJ3M3grQytGTGlCOU5zaFRHOU9VZUFHeFNkWGtOYUNZMGkyQ25hSWhkWWNONmNvZEVWVnNRdG8vdTFMWU00STJjb1Rnczg1M3EyODVyZzVCbGRWdWhVMHRScEswQnlEazFjNGcrYmVXODF2VGw3dURMbmNFU1I2YnhYNW45TzNXM25OY1hOeXVSTXFGWnRCMmh1L2RNeFZLaHp3dWNZZTFHdmd4bS9zYmhXYXE2eTFSOFhYalNETnJVUjY1aGhjUmFNZFNPeXR4RlRtR0Z5NTBoYWs3NVZKM3gxQzdKemozY3ByanBzclU5cWlyR1U5YU9ZRU5oMzh1cTVNcGpiSDRFcmIxNEwrZDU4emx6a0dWOXBsQStxVXFEa0dKK3RkQTlKMTJUUzNPVm1QTldTcVZTQ3AxUnczSjFPdFJzbkFDcER3Sml3VmN3eXVlTWdLSkx3Sm02dGJoZVpLaHExUTlNc0N4Sy9wVWpQSDRJckdsNEhZcVo5ZDAwV2IwN0ZENlBxVjhHemxDVkhXcXBsenVzd3h1RUwxRXZ3RkU5UWVPOXo4Y3NRQUFBQUFTVVZPUks1Q1lJST0iLz4KPC9kZWZzPgo8L3N2Zz4K"
                  alt=""
                />
                <p>Verify Your Account</p>
              </dt>
              <dd>
                <p>Proceed with verification process to get more visibility and gain trust on xxx</p>
                <Button long>Get Verified</Button>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
