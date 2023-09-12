import NFTCard, { NFTCardLoading } from '@/pages/explore/c/NFTCard'
import { times } from 'lodash'
export function NFTsCard() {
  return (
    <section className="right-inner">
      {/*<NFTCardLoading />*/}
      {times(10, function (i) {
        return <NFTCard key={i} />
      })}
    </section>
  )
}
