import styled, {css, createGlobalStyle, keyframes} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-blue-primary: #2892D4;
    --color-blue-light: #95A1C1;
    --color-blue-transparent: rgba(62, 76, 103, 0.5);
    --color-gray-transparent: rgba(149, 161, 193, 0.5);
    --color-pastel1: #6BCDF7;
    --color-pastel2: #8F88F2;
    --color-pastel3: #9BDB9D;
    --color-pastel4: #C574A0;
    --color-pastel5: #2F3039;
    --color-pastel6: #CBD743;
    --color-pastel7: #67943F;
    --color-pastel8: #FA7519;
    --color-pastel9: #406E4C;
    --color-pastel10: #4C4BD5;
    --color-pastel11: #DFDAD9;
    --color-pastel12: #D38A69;

    // MAJOR THIRD SCALE RATIOS
    --line-height: 125%;
    --line-height-l: 156%;
    --line-height-xl: 195%;

    --font-size-2xs: 0.51rem;
    --font-size-xs: 0.64rem;
    --font-size-s: 0.80rem;
    --font-size: 1rem;
    --font-size-l: 1.25rem;
    --font-size-xl: 1.6rem;
    --font-size-2xl: 2rem;
    --font-size-3xl: 2.4rem;
    --font-size-4xl: 3rem;
    --font-size-5xl: 3.9rem;
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

  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: var(--color-white);
  }

  body {
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0f0e13;
    background-image: linear-gradient(
      90deg,
      #0d0c12 0%,
      #2e3251 60%,
      #501a2d 100%
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
    z-index: 99;
    background-color: rgba(24, 17, 45, 0.72);
    animation: ${fade} 0.2s linear alternate;
  }
`
