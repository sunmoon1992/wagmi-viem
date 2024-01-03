import { memo, useEffect, useRef } from 'react'
import Swiper from 'swiper'

import 'swiper/swiper.scss'

interface Props {
  index: string
  limit?: number
  length?: number
  children?: React.ReactElement[]
  callback?: (index: number) => void
}

const Components: React.FC<Props> = ({ callback, children, index, length = 0, limit = 0 }) => {
  const swiper = useRef<any>(null)

  useEffect(() => {
    swiper.current?.destroy(false)

    if (document.getElementById(`swiper-container-${index}`)) {
      swiper.current = new Swiper(`.swiper-container-${index}`, {
        resistanceRatio: 0,
        watchSlidesProgress: true,
        on: {
          init(th) {
            let ratio = 0
            const { slides } = th

            if (length > limit || slides.length > 4) {
              ratio = 0.9226
            } else {
              ratio = 0.82
            }

            const offsetAfter = th.width * ratio

            for (let i = 0; i < slides.length; i++) {
              const slide = slides.eq(i)
              const { progress } = slides[i]

              if (progress <= 0) {
                slide.transform(`translateX(${-progress * offsetAfter}px)`)
                slide.css('opacity', Number(progress) + 8)
              }

              slide.css('zIndex', 100 - i)
            }
          },
          setTranslate(th) {
            let ratio = 0
            const { slides } = th as any

            if (length > limit || slides.length > 4) {
              ratio = 0.9226
            } else {
              ratio = 0.82
            }

            const offsetAfter = th.width * ratio
            for (let i = 0; i < slides.length; i++) {
              const slide = slides.eq(i)
              const { progress } = slides[i]

              if (progress <= 0) {
                slide.transform(`translateX(${-progress * offsetAfter}px)`)
                slide.css('opacity', Number(progress) + 8)
              }
            }
          },
          setTransition(th, transition) {
            for (let i = 0; i < th.slides.length; i++) {
              const slide = th.slides.eq(i)
              slide.transition(transition)
            }
          },
          slideChangeTransitionEnd(th) {
            callback?.(th.activeIndex)
          }
        }
      })
    }

    swiper.current?.init()
  }, [children, index, limit, length, callback])

  return (
    <div className={`swiper-container swiper-container-${index}`} id={`swiper-container-${index}`} dir="rtl">
      <div className="swiper-wrapper">{children}</div>
    </div>
  )
}

export default memo(Components)
