import { Countdown } from '@/pages/home/c/Countdown'
import { D } from '@/utils/tools'

const Features = () => {
  return (
    <div>
      <p>
        Features for <br />
        the Future
      </p>

      <section>
        <div>
          <span>Whitelist</span>
          <span>
            <em>1500</em>
            <i>/1500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: '0%' }} />
          <em>0%</em>
        </div>
        <ul>
          <li>
            <span>Supply</span>
            <em>1500</em>
          </li>
          <li>
            <span>Mint Price</span>
            <em>1 Sol</em>
          </li>
          <li>
            <span>Balance</span>
            <em>0 Sol</em>
          </li>
        </ul>
        <button>Go To MINT</button>
        <small>Max 1 mint per wallet</small>
        <Countdown initTimestamp={D('2024-01-08 20:00:00').valueOf()} />
      </section>

      <section>
        <div>
          <span>Public Sale</span>
          <span>
            <em>500</em>
            <i>/500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: '0%' }} />
          <em>0%</em>
        </div>
        <ul>
          <li>
            <span>Supply</span>
            <em>500</em>
          </li>
          <li>
            <span>Mint Price</span>
            <em>1 Sol</em>
          </li>
          <li>
            <span>Balance</span>
            <em>0 Sol</em>
          </li>
        </ul>
        <button>Go To MINT</button>
        <small>Max 1 mint per wallet</small>
        <Countdown initTimestamp={D('2024-01-08 22:00:00').valueOf()} />
      </section>
    </div>
  )
}

export default Features
