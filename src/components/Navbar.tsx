'use client'
import {useSession} from 'next-auth/react'
import {useEffect, useMemo, useState} from 'react'

import {NavbarItem} from './NavbarItem'

export function Navbar() {
  const session = useSession()
  const isAdmin = session?.data?.user.role === 'ADMIN'

  const [navRef, setNavRef] = useState<HTMLUListElement | null>(null)
  const [cardBgRef, setCardBgRef] = useState<HTMLUListElement | null>(null)

  const NAV_ITEMS = [
    {
      label: 'About',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Media',
      path: '/media',
    },
    {
      label: 'Feedbacks',
      path: '/feedbacks',
    },
    ...(isAdmin ? [{label: 'Dashboard', path: '/dashboard'}] : []),
  ]

  const [cardId, setCardId] = useState<string>()

  function setCardVariables(card: Element) {
    if (navRef && cardBgRef) {
      const cardRect = card.getBoundingClientRect()
      const containerRect = navRef.getBoundingClientRect()

      const top = cardRect.top - containerRect.top + 'px'
      const left = cardRect.left - containerRect.left + 'px'
      const width = cardRect.width + 'px'
      const height = cardRect.height + 'px'

      cardBgRef.style.top = top
      cardBgRef.style.left = `calc(${left} - 0.5rem)`
      cardBgRef.style.width = `calc(${width} + 1rem)`
      cardBgRef.style.height = `calc(${height} + 0.25rem)`
      cardBgRef.style.backgroundColor = 'hsl(var(--primary))'
      cardBgRef.style.color = 'hsl(var(--background))'
    }
  }

  const element = useMemo(() => {
    if (typeof window === 'undefined') return
      return window.document.querySelector(`[data-card="${cardId}"]`)
  }, [cardId])

  useEffect(() => {
    if (element) setCardVariables(element)
  }, [element])

  useEffect(() => {
    if (typeof window === 'undefined') return
      const cardInitial = window.document.querySelector('[data-card-initial]')
      const element =
        window.document.querySelector('.card:hover') || cardInitial
      if (element) {
        window.addEventListener('resize', () => {
          setCardVariables(element)
        })
      }
  }, [])

  return (
    <nav
      ref={setNavRef as any}
      className="relative mx-auto hidden items-center justify-center gap-4 py-1 font-sans text-lg font-semibold sm:flex sm:text-xl"
    >
      <div id="card-bg" className="-rotate-3" ref={setCardBgRef as any}></div>
      {NAV_ITEMS.map(item => (
        <NavbarItem
          key={item.label}
          {...item}
          data-card={item.label}
          onMouseOver={() => {
            setCardId(item.label)
          }}
          onMouseOut={() => {
            setCardId(undefined)
          }}
        />
      ))}
    </nav>
  )
}

// const cardContainer = document?.querySelector('.cards-container');
// const cardBg = document?.querySelector(".card-bg");
// const cards = document?.querySelectorAll(".card");
