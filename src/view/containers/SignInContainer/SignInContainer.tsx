import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

import * as S from './style'

type TProvider = {
  callbackUrl: string
  id: string
  name: string
  signinUrl: string
  type: string
}
interface IProps {
  csrfToken: string
  providers: TProvider[]
}

const SignInContainer: React.FC<IProps> = ({csrfToken, providers}) => {
  const {data: session} = useSession()

  if (session) {
    return (
      <S.SignedInContainer>
        <S.SignedInImage src={session.user.image} alt={session.user.name} />
        <S.SignedInEmail>{session.user.email}</S.SignedInEmail>
        <S.SignedInSignOutButton onClick={() => signOut()}>
          Sign out
        </S.SignedInSignOutButton>
      </S.SignedInContainer>
    )
  }

  return (
    <S.SignInContainer>
      <S.SignInForm method="post" action="/api/auth/signin/email">
        <S.SignInFormHiddenInput
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
        />
        <S.SignInFormLabel>
          Email address
          <S.SignInFormInput
            type="email"
            id="email"
            name="email"
            placeholder="test@example.com"
          />
        </S.SignInFormLabel>
        <S.SignInFormButton>Sign in with Email</S.SignInFormButton>
      </S.SignInForm>

      <S.SignInProviders>
        {Object.values(providers).map(provider => (
          <S.SignInProvider key={provider.name}>
            <S.SignInProviderButton onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </S.SignInProviderButton>
          </S.SignInProvider>
        ))}
      </S.SignInProviders>
    </S.SignInContainer>
  )
}

export default SignInContainer
