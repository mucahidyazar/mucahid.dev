import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import {makeSelectIsLoadingVisible} from '@/store/settings'
import {useIsomorphicLayoutEffect} from '@/hooks'

import * as S from './style'

const PageLoading: React.FC = () => {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)
  const isLoadingVisible = useSelector(makeSelectIsLoadingVisible)

  useIsomorphicLayoutEffect(() => {
    const handleRouteChangeStart = (/* url, {shallow} */) => {
      setIsPageLoading(true)
    }
    const handleRouteChangeComplete = (/* url, {shallow} */) => {
      setIsPageLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  if (!isLoadingVisible && !isPageLoading) return null

  return (
    <S.PageLoadingContainer>
      <S.PageLoading>
        <div></div>
        <div></div>
      </S.PageLoading>
    </S.PageLoadingContainer>
  )
}

PageLoading.propTypes = {}

PageLoading.defaultProps = {}

export default PageLoading
