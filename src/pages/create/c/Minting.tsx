import { Switch } from '@arco-design/web-react'

export const Minting = () => {
  return (
    <div className="minting">
      <div className="top">
        <div>
          <label className="large" htmlFor="minting">
            Free minting
          </label>
          <p>
            <small>Buyer will pay gas fees for minting</small>
          </p>
        </div>
        <Switch type="round" />
      </div>
    </div>
  )
}
