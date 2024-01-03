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
          <span>Current progress</span>
          <span>
            <em>21,000</em>
            <i>/100,000</i>
          </span>
        </div>
        <div>
          <span />
          <span style={{ width: '25%' }} />
          <em>25%</em>
        </div>
        <ul>
          <li>
            <span>Supply</span>
            <em>100,000</em>
          </li>
          <li>
            <span>Mint Price</span>
            <em>0 Sol</em>
          </li>
          <li>
            <span>Balance</span>
            <em>0 Sol</em>
          </li>
        </ul>
        <button>Go To MINT</button>
      </section>
    </div>
  )
}

export default Part2
