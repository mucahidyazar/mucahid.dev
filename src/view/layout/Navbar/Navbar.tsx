import React from 'react'
import type {NextComponentType} from 'next'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import {useTranslation} from 'next-i18next'

import {DrawerPlacement, Theme} from '@/constants'
import {makeSelectUser} from '@/store/auth'
import {
  changeLanguage,
  changeTheme,
  makeSelectLanguage,
  makeSelectTheme,
} from '@/store/settings'

import * as S from './style'

type RouteModel = {
  id: string
  key?: string
  name: string
  route: string
  source: string
}

const Navbar: NextComponentType = () => {
  const {t, i18n} = useTranslation('common')
  const user = useSelector(makeSelectUser)
  const dispatch = useDispatch()
  const router = useRouter()
  const [toggleMenu, setToggleMenu] = useState(false)
  const routes = t('navbar', {returnObjects: true}) as RouteModel[]

  const theme = useSelector(makeSelectTheme)
  const language = useSelector(makeSelectLanguage)

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  const changeThemeHandler = () => {
    dispatch(changeTheme(theme === Theme.DEFAULT ? Theme.LIGHT : Theme.DEFAULT))
  }
  const changeLanguageHandler = () => {
    const nextLanguage = i18n.language === 'en' ? 'tr' : 'en'
    dispatch(changeLanguage(nextLanguage))
  }

  return (
    <S.Navbar>
      <S.NavbarBrand>
        <Link href="/" passHref>
          <S.NavbarBrandText>
            mucahid<S.NavbarBrandColor>.dev</S.NavbarBrandColor>
          </S.NavbarBrandText>
        </Link>
      </S.NavbarBrand>
      <S.NavbarMenu>
        {routes.map(({id, name, route, source}) => (
          <S.NavbarMenuItem key={id} isActive={router.route === source}>
            <Link href={route}>{name}</Link>
          </S.NavbarMenuItem>
        ))}
      </S.NavbarMenu>

      <S.NavbarControlPanel>
        <S.Languages>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={language}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <S.Language onClick={changeLanguageHandler}>
                {language}
              </S.Language>
            </CSSTransition>
          </SwitchTransition>
        </S.Languages>

        <S.Themes onClick={changeThemeHandler}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={theme === Theme.DEFAULT ? Theme.DEFAULT : Theme.LIGHT}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <S.Theme>
                <S.ThemeIcon
                  size={24}
                  name={theme === Theme.DEFAULT ? 'moon' : 'sun'}
                />
              </S.Theme>
            </CSSTransition>
          </SwitchTransition>
        </S.Themes>

        <S.Menu onClick={handleToggleMenu}>
          <S.MenuToggler type="checkbox" checked={toggleMenu} />
          <S.MenuIcon>
            <S.MenuIconBar />
          </S.MenuIcon>
        </S.Menu>

        {user.image ? (
          <Link href="/sign-in" passHref>
            <S.UserImage>
              <S.UserImageSource
                src={user?.image ? user.image : '/gif/profile/gif-1.gif'}
                alt="logo"
                className="bg-black"
              />
            </S.UserImage>
          </Link>
        ) : (
          <S.UserIcon>
            <Link href="/sign-in" passHref>
              <S.UserIconSource size={24} name="user" />
            </Link>
          </S.UserIcon>
        )}
      </S.NavbarControlPanel>
      <S.Drawer
        isVisible={toggleMenu}
        onClose={() => setToggleMenu(false)}
        placement={DrawerPlacement.LEFT}
        isClosable={true}
        size="80%"
      >
        <S.DrawerMenu>
          {routes.map(({id, name, route}) => (
            <Link href={route} passHref key={id}>
              <S.DrawerMenuItem>{name}</S.DrawerMenuItem>
            </Link>
          ))}
        </S.DrawerMenu>
      </S.Drawer>
    </S.Navbar>
  )
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar
