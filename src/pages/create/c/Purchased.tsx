import { Input, Switch } from '@arco-design/web-react'
import { useBoolean } from 'ahooks'

export const Purchased = () => {
  const [checked, { setTrue, setFalse }] = useBoolean(false)
  return (
    <div className="purchased">
      <div className="top">
        <div>
          <label className="large" htmlFor="purchased">
            Unlock once purchased
          </label>
          <p>
            <small>Content will be unlocked after successful transaction</small>
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
      {checked && (
        <div className="bottom">
          <Input placeholder="Digital key, code to redeem or link to a file..." />
        </div>
      )}
    </div>
  )
}
