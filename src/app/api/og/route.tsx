/* eslint-disable @next/next/no-img-element */
import {headers} from 'next/headers'
import {ImageResponse} from 'next/og'

import {ME_DESCRIPTION} from '@/constants'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const page = searchParams.get('page')
  const title = searchParams.get('title')
  const description = searchParams.get('description') || ME_DESCRIPTION
  const host = headers().get('host')
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https'
  const domain = `${protocal}://${host}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '80px',
          padding: '240px',
          background:
            'radial-gradient(circle, rgba(70, 71, 122, 1) 0%, rgba(11, 17, 32, 1) 100%)',
        }}
      >
        <img
          src={`${domain}/me.jpg`}
          alt="Picture of the author"
          width={300}
          height={300}
          style={{
            border: '8px solid black',
          }}
        />
        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              height: '60px',
              overflow: 'hidden',
            }}
          >
            <img
              src={`${domain}/svg/full-logo.svg`}
              alt="Picture of the author"
              height={60}
            />
            {page && (
              <p
                style={{
                  color: 'white',
                  fontSize: '60px',
                  textTransform: 'uppercase',
                }}
              >
                / {page}
              </p>
            )}
          </p>
          {title && (
            <p
              style={{
                textAlign: 'center',
                fontSize: 32,
                margin: '20px auto 0',
                color: 'orange',
              }}
            >
              {title}
            </p>
          )}
          <p
            style={{
              color: 'white',
              textAlign: 'center',
              lineHeight: '24px',
            }}
          >
            {description}
          </p>
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}

export const runtime = 'edge'
