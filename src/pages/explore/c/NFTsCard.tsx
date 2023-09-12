import NFTCard from '@/pages/explore/c/NFTCard'
import { times } from 'lodash'

export function NFTsCard({ size }: { size: 'big' | 'small' }) {
  return (
    <section className="right-inner">
      {/*<NFTCardLoading />*/}
      {times(10, function (i) {
        return <NFTCard key={i} size={size} />
      })}
    </section>
  )
}
