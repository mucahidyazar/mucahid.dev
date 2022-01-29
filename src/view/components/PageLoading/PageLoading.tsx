import React, {useState, useEffect} from 'react'
import type {NextComponentType} from 'next'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import {makeSelectIsLoadingVisible} from '@/store/settings'

import * as S from './style'

const PageLoading: NextComponentType = () => {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)
  const isLoadingVisible = useSelector(makeSelectIsLoadingVisible)

  useEffect(() => {
    const handleRouteChange = (/* url, {shallow} */) => {
      setIsPageLoading(prev => !prev)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChange)
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
