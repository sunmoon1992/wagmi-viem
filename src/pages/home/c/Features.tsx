import MintNFT from '@/pages/home/c/MintNFT'

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
            <em>0</em>
            <i>/1500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: `0.00%` }} />
          <em>0.00%</em>
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
        <MintNFT />
        <small>Max 1 mint per wallet</small>
      </section>

      <section>
        <div>
          <span>Public Sale</span>
          <span>
            <em>0</em>
            <i>/500</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: `0.00%` }} />
          <em>0.00%</em>
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
        <MintNFT />
        <small>Max 1 mint per wallet</small>
      </section>
    </div>
  )
}

export default Features
