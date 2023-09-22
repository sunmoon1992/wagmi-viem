import NFTCard, { NFTCardLoading } from '@/pages/explore/c/NFTCard'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export function NFTsCard({ size }: { size: 'big' | 'small' }) {
  const fetchMoreData = () => {
    setTimeout(() => {
      setV((v) => [...v, ...Array.from({ length: 10 })])
    }, 200000)
  }
  const [v, setV] = useState(Array.from({ length: 20 }))
  return (
    <section>
      {/*<NFTCardLoading />*/}
      <InfiniteScroll
        className="right-inner"
        dataLength={v.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<NFTCardLoading size={size} />}
      >
        {v.map((i, index) => (
          <NFTCard key={i} size={size} />
        ))}
      </InfiniteScroll>
    </section>
  )
}
