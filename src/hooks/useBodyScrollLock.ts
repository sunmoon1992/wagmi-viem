import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useLayoutEffect } from 'react'

export const useBodyScrollLock = (v: boolean) => {
  useLayoutEffect(() => {
    if (v) {
      disableBodyScroll(document.getElementById('root'))
    } else {
      enableBodyScroll(document.getElementById('root'))
    }
  }, [v])
}
