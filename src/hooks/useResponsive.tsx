import {useState} from 'react'
import {useMediaQuery} from 'react-responsive'

import {BreakpointSize} from '@/constants'

import {useIsomorphicLayoutEffect} from './useIsoMorphicLayoutEffect'

export function useResponsive() {
  const [isClient, setIsClient] = useState(false)

  const isMobile = useMediaQuery({
    maxWidth: BreakpointSize.MOBILE.MAX,
  })

  const isMiniTablet = useMediaQuery({
    minWidth: BreakpointSize.TABLET_MINI.MIN,
    maxWidth: BreakpointSize.TABLET_MINI.MAX,
  })

  const isTablet = useMediaQuery({
    minWidth: BreakpointSize.TABLET.MIN,
    maxWidth: BreakpointSize.TABLET.MAX,
  })

  const isDesktop = useMediaQuery({
    minWidth: BreakpointSize.DESKTOP.MIN,
  })

  useIsomorphicLayoutEffect(() => {
    setIsClient(true)
  }, [])

  return {
    isDesktopView: isClient ? isDesktop : true,
    isTabletView: isClient ? isTablet : false,
    isMiniTabletView: isClient ? isMiniTablet : false,
    isMobileView: isClient ? isMobile : false,
  }
}
