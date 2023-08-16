import * as React from 'react'

/**
 const mounted = useMounted()
 if (!mounted) return null
 */
export const useMounted = () => {
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => setMounted(true), [])

  return mounted
}
