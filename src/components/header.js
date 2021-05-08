import * as React from 'react'
import { Link } from 'gatsby'
import Container from './container'

const ListLink = (props) => {
  return (
    <li className="header__navigation-item">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

const Header = (props) => {
  return (
    <header className="header ">
      <Container>
        <Link to="/" className="header__site-title ">
          <h3>Overlook Hotel</h3>
        </Link>
        <ul className="header__navigation-list">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/gallery/">Gallery</ListLink>
          <ListLink to="/faq/">FAQ</ListLink>

          <ListLink to="/now-hiring">Now Hiring!</ListLink>
          <ListLink to="/contact">Contact</ListLink>
        </ul>
      </Container>
    </header>
  )
}

export default Header

/*// data
const links = [
  {
    text: 'Home',
    url: '#',
    description: 'Home page here',
    color: '#E95800'
  },
  {
    text: 'About',
    url: '/about',
    description: 'About The Overlook',
    color: '#1099A8'
  },
  {
    text: 'Gallery',
    url: '/gallery',
    description: 'Look at all these pics!',
    color: '#BC027F'
  },
  {
    text: 'FAQ',
    url: '/faq',
    description: 'Answers for questions',
    color: '#0D96F2'
  },

  {
    text: 'Contact',
    url: '/contact',
    badge: true,
    description: 'Contact the Overlook',
    color: '#663399'
  }
]*/
