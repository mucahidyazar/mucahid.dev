import styled from 'styled-components'

const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
  max-height: 800px;
`

const IntroductionContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IntroductionContentTitle = styled.h4`
  font-weight: 500;
  line-height: var(--line-height-xl);
`

const IntroductionContentDescription = styled.p`
  line-height: var(--line-height-xl);
  font-size: var(--font-size-s);
`

const IntroductionContentItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:nth-child(even) ${IntroductionContentTitle} {
    text-align: right;
  }

  &:nth-child(even) ${IntroductionContentDescription} {
    text-align: right;
  }
`

const IntroductionPhoto = styled.div`
  width: 45%;
  max-height: 100%;
`

export {
  IntroductionContainer,
  IntroductionContent,
  IntroductionContentItem,
  IntroductionContentTitle,
  IntroductionContentDescription,
  IntroductionPhoto,
}
