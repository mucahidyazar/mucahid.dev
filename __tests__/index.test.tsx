/* eslint-disable no-console */
// import {render, screen} from '@testing-library/react'

// import Home from '@/pages/index'
const remote = process.env.VERCEL_URL

if (process.env.VERCEL_URL) {
  console.log(`Testing against remote url: ${remote}.`)
} else {
  console.log('Testing locally only.')
}

describe('Home', () => {
  it('renders a heading', () => {
    // render(<Home />)
    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })
    // expect(heading).toBeInTheDocument()
  })
})
