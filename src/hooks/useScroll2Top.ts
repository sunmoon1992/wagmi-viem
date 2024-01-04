import { useLayoutEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { useLocation } from 'react-router-dom'

// auto scroll to top
export const useScroll2Top = () => {
  document.body.classList.add(isMobile && 'h5')
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })
  }, [pathname])
}
