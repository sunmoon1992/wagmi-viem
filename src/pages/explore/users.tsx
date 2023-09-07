import UserCard, { UserCardLoading } from '@/pages/explore/c/UserCard'
import { Input } from '@arco-design/web-react'
import { IconSearch, IconUser } from '@arco-design/web-react/icon'
import { times } from 'lodash'
import { useRef, useEffect, useCallback, useState, useLayoutEffect } from "react";

let seqCount = 0

function Users() {
  const bottomRef = useRef<any>()
  const observerRef = useRef<IntersectionObserver | null>()

  const [dataCount, setDataCount] = useState<number>(22)

  const funcAsync = useCallback(async () => {
    setDataCount((val) => val + 10)
  }, [])

  useLayoutEffect(() => {
    // if (dataCount) {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'bottom') {
            seqCount += 1
            console.info('intersectionObserver=', seqCount)
            void funcAsync()
          }
        })
      },
      { threshold: 0.2 }
    )
    if (bottomRef.current) {
      intersectionObserver.observe(bottomRef.current)
      observerRef.current = intersectionObserver
    }
    // }
    return () => {
      observerRef.current && observerRef.current?.disconnect()
    }
  })

  return (
    <section className="xyz-explore-users">
      <div className="xyz-explore-users-search">
        <Input placeholder="Search by users" prefix={<IconUser/>} suffix={<IconSearch/>}/>
      </div>
      <div className="xyz-explore-users-inner">
        {times(20, function (index) {
          return <UserCardLoading key={index}/>
        })}
        {/*{times(dataCount, function (index) {*/}
        {/*  const len = dataCount*/}
        {/*  const id = index === len - 1 ? 'bottom' : undefined*/}
        {/*  const ref = index === len - 1 ? bottomRef : null*/}
        {/*  return <UserCard key={index} id={id} ref={ref} />*/}
        {/*})}*/}
      </div>
    </section>
  )
}

export default Users
