import React from 'react'
import type {NextComponentType} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

import {DrawerPlacement} from '@/constants'
import {makeSelectUser} from '@/store/auth'
import {
  changeLanguage,
  changeTheme,
  makeSelectLanguage,
  makeSelectTheme,
} from '@/store/settings'
import {Drawer} from '@/ui'

import * as S from './style'

const routes = [
  {id: 'home', name: 'Home', route: '/'},
  {id: 'about', name: 'About', route: '/about'},
  {id: 'projects', name: 'Projects', route: '/projects'},
  {id: 'articles', name: 'Articles', route: '/articles'},
  {id: 'media', name: 'Media', route: '/media'},
  {id: 'contact', name: 'Contact', route: '/contact'},
]

const Navbar: NextComponentType = () => {
  const user = useSelector(makeSelectUser)
  const dispatch = useDispatch()
  const router = useRouter()
  const [toggleMenu, setToggleMenu] = useState(false)

  const theme = useSelector(makeSelectTheme)
  const language = useSelector(makeSelectLanguage)

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  const changeThemeHandler = () => {
    dispatch(changeTheme())
  }
  const changeLanguageHandler = () => {
    dispatch(changeLanguage())
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
        {routes.map(({id, name, route}) => (
          <S.NavbarMenuItem key={id} isActive={router.route === route}>
            <Link href={route}>{name}</Link>
          </S.NavbarMenuItem>
        ))}
      </S.NavbarMenu>
      <S.NavbarUser>
        <S.NavbarLanguages>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={language === 'tr' ? 'tr' : 'en'}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <S.NavbarLanguage onClick={changeLanguageHandler}>
                {language === 'tr' ? 'en' : 'tr'}
              </S.NavbarLanguage>
            </CSSTransition>
          </SwitchTransition>
        </S.NavbarLanguages>
        <S.NavbarTheme onClick={changeThemeHandler}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={theme === 'light' ? 'dark' : 'light'}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <S.NavbarIconWrapper>
                <S.NavbarIcon
                  size={24}
                  name={theme === 'dark' ? 'sun' : 'moon'}
                />
              </S.NavbarIconWrapper>
            </CSSTransition>
          </SwitchTransition>
        </S.NavbarTheme>
        <S.NavbarLogoGradientBorder onClick={handleToggleMenu}>
          <S.NavbarLogo>
            <Image
              src={user?.image ? user.image : '/gif/profile/gif-1.gif'}
              alt="logo"
              width="100%"
              height="100%"
              className="bg-black"
            />
          </S.NavbarLogo>
        </S.NavbarLogoGradientBorder>
      </S.NavbarUser>
      <Drawer
        isVisible={toggleMenu}
        onClose={() => setToggleMenu(false)}
        placement={DrawerPlacement.LEFT}
        size="80%"
        isClosable={true}
      >
        <S.DrawerNavbarMenu>
          {routes.map(({id, name, route}) => (
            <S.DrawerNavbarMenuItem key={id}>
              <Link href={route}>{name}</Link>
            </S.DrawerNavbarMenuItem>
          ))}
        </S.DrawerNavbarMenu>
      </Drawer>
    </S.Navbar>
  )
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar
