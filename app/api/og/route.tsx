import {ImageResponse} from 'next/server'

const DESCRIPTION =
  'I create accessible, user-friendly web applications with the best efficient solutions and best practices of the frontend world for SAAS projects.'

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const page = searchParams.get('page')
  const title = searchParams.get('title')
  const description = searchParams.get('description') || DESCRIPTION

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
          src="https://instagram.fist4-1.fna.fbcdn.net/v/t51.2885-19/329570020_1642385336240744_1996111653770665053_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=7NVySoWqO-gAX9XCiLU&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA_EVXPQp_s4AafJqcWk4VWdkWJTiLSLpDLZHS5Y__wnQ&oe=6442A89B&_nc_sid=8fd12b"
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
              src="https://mucahid.dev/svg/full-logo.svg"
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
