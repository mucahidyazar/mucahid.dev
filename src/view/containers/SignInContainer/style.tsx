import styled from 'styled-components'

import {Button, Input} from '@/ui'
import {BreakpointSize} from '@/constants'

const SignInContainer = styled.div`
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2.5rem;
  margin: 10rem auto;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
    padding: 1rem;
  }
`

const SignInForm = styled.form`
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 1px;
    background-color: #ccc;
    margin: 1.25rem auto;
  }
`
const SignInFormHiddenInput = styled.input``
const SignInFormLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`
const SignInFormInput = styled(Input)``
const SignInFormButton = styled(Button)`
  width: 100%;
`

const SignInProviders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const SignInProvider = styled.div``
const SignInProviderButton = styled(Button)`
  width: 100%;
`

// SIGNED IN
const SignedInContainer = styled.div`
  width: 320px;
  margin: 5rem auto 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BreakpointSize.MOBILE.MAX}px) {
    width: 100%;
  }
`
const SignedInEmail = styled.div`
  margin-bottom: 1rem;
`
const SignedInImage = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`
const SignedInSignOutButton = styled(Button)`
  width: 100%;
`

export {
  SignInContainer,
  SignInForm,
  SignInFormHiddenInput,
  SignInFormLabel,
  SignInFormInput,
  SignInFormButton,
  SignInProviders,
  SignInProvider,
  SignInProviderButton,
  SignedInContainer,
  SignedInEmail,
  SignedInImage,
  SignedInSignOutButton,
}
