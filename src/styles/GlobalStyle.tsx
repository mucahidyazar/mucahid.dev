import {createGlobalStyle, keyframes} from 'styled-components'

import {Theme, ZIndex} from '@/constants'

import {defaultColors, lightColors} from './colors'
import {fontSizes} from './font-sizes'
import {lineHeights} from './line-heights'

export const GlobalStyle = createGlobalStyle`
  :root {
    ${defaultColors}
    ${fontSizes}
    ${lineHeights}
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: inherit;
    // 1.25 * 1.25 = 1.56
    // 1.5625 * 1.25 = 1.95
    line-height: 156%;
    margin: 0;
    padding: 0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: var(--color-scrollbar);
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
    background-color: var(--color-scrollbar);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
                      left bottom,
                      left top,
                      color-stop(0.1, rgba(80,26,45,0.8)),
                      color-stop(0.5, rgba(80,26,45,0.65)),
                      color-stop(1, rgba(80,26,45,0.8)));
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: var(--color-white);
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-background-dark);
    background-image: linear-gradient(
      90deg,
      var(--color-background) 0%,
      var(--color-background-blue) 60%,
      var(--color-background-brown) 100%
    );
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }


  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  h1 {
    font-size: var(--font-size-5xl);
  }

  h2 {
    font-size: var(--font-size-4xl);
  }

  h3 {
    font-size: var(--font-size-3xl);
  }

  h4 {
    font-size: var(--font-size-2xl);
  }

  h5 {
    font-size: var(--font-size-xl);
  }

  h6 {
    font-size: var(--font-size-l);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: 'ProximaNovaLight';
    src: url('/fonts/Proxima Nova Light.otf');
    font-style: light;
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'ProximaNovaCond-Thin';
    src: url('/fonts/ProximaNovaCond-Thin.otf');
    font-style: thin;
    font-weight: 100;
    font-display: swap;
  }

  // For drawer
  .fade-enter{
    opacity: 0;
    transform: translateY(-32px);
  }
  .fade-exit{
    opacity: 1;
  }
  .fade-enter-active{
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit-active{
    opacity: 0;
    transform: translateY(32px);
  }
  .fade-enter-active,
  .fade-exit-active{
    transition: all 500ms;
  }

  ${({theme}) => theme === Theme.LIGHT && lightColors}
`

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const BackDropStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }

  body::after {
    content: '';
    top: 0;
    right: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: ${ZIndex.BACKDROP};
    background-color: rgba(24, 17, 45, 0.72);
    animation: ${fade} 0.2s linear alternate;
  }
`
