import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Container from '../components/container'

// // styles

// // markup
const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <title>Overlook Hotel</title>
        <h1>Overlook Hotel</h1>

        <p>Your life is about to change</p>
        <p>A life changing experience awaits you</p>
        <p>"This place has changed my life" - Jack T.</p>
        <div>
          <img src="https://source.unsplash.com/random/400x200" alt="beep" />
        </div>
        <p>
          <Link to="/">Won't you join us?</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default IndexPage
