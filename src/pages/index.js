import * as React from 'react'
// import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import room237 from '../images/hotel-room-237-1.png'
import ullman from '../images/ullman-headshot.png'
import Hero from '../components/hero'
import Header from '../components/header'
import Footer from '../components/footer'

// import Layout from '../components/layout'
// import Container from '../components/container'

// // styles

// // markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <section className="test-section-1 welcome">
        <div className="row">
          <h2>
            Enjoy your stay
            <br /> in our hotel
          </h2>
        </div>
      </section> */}
      <section id="about" className="test-section-2 welcome-section">
        <div className="row">
          <div className="col-1-of-3">
            <h2>
              Enjoy Your Stay
              <br />
              in Our Hotel
            </h2>
          </div>
          <div className="col-1-of-3">Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
          <div className="col-1-of-3">Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </section>
      <section className="test-section-3 main-services-section">
        <div className="main-service main-service--1">
          <div className="main-service__content-front">
            <h3>24H Room Service</h3>
            <p>Enjoy around the clock service. It's never too late or to early for us to serve you.</p>
          </div>
        </div>
        <div className="main-service main-service--2">
          <div className="main-service__content-front">
            <h3>Restaurant and Bars</h3>
            <p>With a full array of liquor and menu items you can stay the whole season and not have the same thing twice!</p>
          </div>
        </div>
        <div className="main-service main-service--3">
          <div className="main-service__content-front">
            <h3>Events and Meetings</h3>
            <p>Enjoy the festivities of our legendary Gold Room. It's the sort of place you'll never want to leave.</p>
          </div>
        </div>
        <div className="main-service main-service--4">
          <div className="main-service__content-front">
            <h3>Fitness and Spa</h3>
            <p>We have a hedge maze.</p>
          </div>
        </div>
      </section>
      <section className="test-section-4 other-services-section">
        <div className="row">
          <div className="col-1-of-3 other-service other-service--1 ">
            <h3>Enjoy free Wi-Fi</h3>
            <p>We believe that when a hotel advertises free WiFi, they should provide travelers with a fast and reliable connection.</p>
          </div>
          <div className="col-1-of-3 other-service other-service--2 ">
            <h3>Concierge Service</h3>
            <p>Top-tier hotels have a lot to recommend them: luxurious spas, twice-daily room service and superb on-site restaurants.</p>
          </div>
          <div className="col-1-of-3 other-service other-service--3 ">
            <h3>Pool access</h3>
            <p>Hotel has pool room, in particular, hotels based in big cities might require keycard access to get into the pool. Spa, and amenity access.</p>
          </div>
        </div>
      </section>
      <section className="test-section-5 best-rooms-section">
        <h2 className="section-title">Best Rooms</h2>
        <div className="row">
          <div className="col-1-of-3 best-room best-room--1">
            <img className="best-room__image" src={room237} alt="The famous room 237" />
            <div className="best-room__details">
              <h3 className="best-room__name">Room 217</h3>
              <p className="best-room__occupancy">2 adults and 1 child</p>
              <p className="best-room__description">This comfortable hotel room of doom has all the luxuries one would have at home. Ghosts included! Free hat.</p>
              <div className="best-room__link">
                <a href="#header" className="best-room__button">
                  Book now $0.00
                </a>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 best-room best-room--1">
            <img className="best-room__image" src={room237} alt="The famous room 237" />
            <div className="best-room__details">
              <h3 className="best-room__name">Room 237</h3>
              <p className="best-room__occupancy">2 adults and 1 child</p>
              <p className="best-room__description">This comfortable hotel room of doom has all the luxuries one would have at home. Ghosts included! Free hat.</p>
              <div className="best-room__link">
                <a href="#header" className="best-room__button">
                  Book now $0.00
                </a>
              </div>
            </div>
          </div>
          <div className="col-1-of-3 best-room best-room--1">
            <img className="best-room__image" src={room237} alt="The famous room 237" />
            <div className="best-room__details">
              <h3 className="best-room__name">Room 1408</h3>
              <p className="best-room__occupancy">1 adult</p>
              <p className="best-room__description">This comfortable hotel room of doom has all the luxuries one would have at home. Ghosts included! Free hat.</p>
              <div className="best-room__link">
                <a href="#header" className="best-room__button">
                  Book now $0.00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="test-section-6 book-now-section">
        <div className="row">
          <div className="col-1-of-2">&nbsp;</div>
          <div className="col-1-of-2 bg-shaded">
            <div className="book-now__content">
              <h2>
                Good times, Great <br />
                spirits!
              </h2>
              <p>Whatever we gotta say to get you in here. We need more spirits, that Jack guy tasted terrible! Please come join us and you'll have the time of your life in our ballroom.</p>
              <div className="book-now__link">
                <div className="book-now__button">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="test-section-7 testimonial-section">
        <h2>What they say</h2>
        <div className="testimonial-content">
          <img src={ullman} alt="" className="testimonial__image" />
          <h3 className="testimonial__name">Stuart Ullman</h3>
          <blockquote className="testimonial__quote">It's the best building I have ever known, it's like this place is literally alive!</blockquote>
        </div>
      </section>
      <Footer />
    </>
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
