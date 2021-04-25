import * as React from 'react'
// import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import Container from '../components/container'

// // styles

// // markup
const IndexPage = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        {/* <img src="img/logo-white.png" alt="Logo" className="header__logo" /> */}
        <span role="img" aria-label="Spooky ghost">
          👻
        </span>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Overlook Hotel</span>
          <span className="heading-primary--sub">
            join the party{' '}
            <span role="img" aria-label="Spooky ghost">
              👻
            </span>{' '}
            <span role="img" aria-label="Spooky ghost">
              👻
            </span>{' '}
            <span role="img" aria-label="Spooky ghost">
              👻
            </span>
          </span>
        </h1>
        <a href="#section-tours" className="btn btn--white btn--animated">
          Book Your Stay
        </a>
      </div>
    </header>
    // <Layout>
    //   <Container>

    //     <title>Overlook Hotel</title>
    //     <h1>Overlook Hotel</h1>

    //     <p>Your life is about to change</p>
    //     <p>A life changing experience awaits you</p>
    //     <p>"This place has changed my life" - Jack T.</p>
    //     <div>
    //       <img src="https://source.unsplash.com/random/400x200" alt="beep" />
    //     </div>
    //     <p>
    //       <Link to="/">Won't you join us?</Link>
    //     </p>
    //   </Container>
    // </Layout>
  )
}

export default IndexPage
