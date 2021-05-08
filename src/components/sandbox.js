import React from 'react'
import { Link } from 'gatsby'
import robit from '../images/robot_image.png'

const SampleButtons = () => (
  <div className="sample-buttons">
    <section>
      <button className="button button_1">Visit Shop</button>
    </section>
    <section>
      <button className="button button_2">Visit Shop</button>
    </section>
    <section>
      <button className="button button_3">Visit Shop</button>
    </section>
  </div>
)

const SampleMenu = () => (
  <div className="sample-menu">
    <menu>
      <nav>
        <ul>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#shop">Shop</Link>
          </li>
          <li>
            <Link to="#blog">Blog</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </menu>
  </div>
)

const RobotCards = () => (
  <div className="robot-card-challenge">
    <div className="robot">
      {/* <StaticImage src="../images/robot_image.png" alt="A little robit" /> */}
      <img src={robit} alt="Robit!" />
      <div className="mask">
        <h2>Bubbles</h2>
        <a href="#shop" className="shop">
          Shop Now
        </a>
      </div>
    </div>
  </div>
)

export { SampleButtons, SampleMenu, RobotCards }
