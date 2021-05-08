import React from 'react'

const Hero = () => (
  <div className="hero">
    <div className="hero__logo-box">
      {/* <img src="img/logo-white.png" alt="Logo" className="hero__logo" /> */}
      <span role="img" aria-label="Spooky ghost">
        👻
      </span>
    </div>

    <div className="hero__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">Overlook Hotel</span>
        <span className="heading-primary--sub">
          join us
          {/* <span role="img" aria-label="Spooky ghost">
            👻
          </span>{' '}
          <span role="img" aria-label="Spooky ghost">
            👻
          </span>{' '}
          <span role="img" aria-label="Spooky ghost">
            👻
          </span> */}
        </span>
      </h1>
      <a href="#section-tours" className="btn btn--white btn--animated">
        Book Your Stay
      </a>
    </div>
  </div>
)

export default Hero
