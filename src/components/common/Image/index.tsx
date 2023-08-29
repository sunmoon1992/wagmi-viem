import { FC, useMemo } from 'react'

import { ImageProps } from '@/components/common/Image/interface'
import { STATIC_RESOURCES_URL } from '@/config'
import { isOuterLink } from '@/utils/tools'

const Image: FC<ImageProps> = ({ src, className, ...props }) => {
  const _src = useMemo(() => (isOuterLink(src) ? src : `${STATIC_RESOURCES_URL}${src}`), [src])
  return <img className={className} src={_src} {...props} alt="" />
}

export default Image
