import { ProjectCard } from '@/pages/explore/c/ProjectCard'
import { Button, Input } from '@arco-design/web-react'
import { IconSearch } from '@arco-design/web-react/icon'
import { times } from 'lodash'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

let seqCount = 0

export function ProjectInfo() {
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
    <div className="xyz-project-info">
      <div className="xyz-search">
        <Input placeholder="Search by Collections" suffix={<IconSearch />} />
      </div>
      <div className="xyz-project-info-inner">
        {times(20, function (index) {
          return <ProjectCard key={index} />
        })}
        <Button size="large">Load More</Button>
      </div>
    </div>
  )
}
