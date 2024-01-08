import banner2 from '@/assets/m-banner2.png'
const Part2 = () => {
  return (
    <div className="soga-part2">
      <img src={banner2} alt="soga" />
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
      </section>
    </div>
  )
}

export default Part2
