import * as React from 'react'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found, boooooo!</h1>
      <p>
        <Link to="/">Back to safety</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
