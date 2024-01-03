import { times } from 'lodash-es'

const Part3 = () => {
  return (
    <div className="soga-part3">
      <div className="inner">
        <div />
        <div>
          <p>Mint NFT item</p>
          <p>My Soga</p>
          <section>
            {times(3, (i) => (
              <div className="card" key={i}>
                <em>#000000</em>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Part3
