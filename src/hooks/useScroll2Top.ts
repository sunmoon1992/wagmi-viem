import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// auto scroll to top
export const useScroll2Top = () => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ behavior: 'smooth', top: 0 })
  }, [pathname])
}
