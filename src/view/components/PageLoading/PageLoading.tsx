import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import * as S from './style'
import {Button} from '@/ui/index'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {isLoadingVisibleSelector} from '@/store/settings/selector'

const PageLoading: NextComponentType = () => {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)
  const isLoadingVisible = useSelector(isLoadingVisibleSelector)

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
  }, [])

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
