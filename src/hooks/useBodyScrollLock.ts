import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useLayoutEffect } from 'react'
import { isMobile } from 'react-device-detect'

export const useBodyScrollLock = (v: boolean) => {
  useLayoutEffect(() => {
    if (v) {
      disableBodyScroll(document.getElementById('root'))
      if (document.body.scrollHeight > window.innerHeight) {
        if (!isMobile) document.body.style.width = 'calc(100% - 4px)'
        else document.body.style.width = '100%'
      }
    } else {
      enableBodyScroll(document.getElementById('root'))
      document.body.style.width = '100%'
    }
  }, [v])
}
