import * as React from 'react'
import { Link } from 'gatsby'

const ListLink = (props) => {
  return (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

const Header = (props) => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Overlook Hotel</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/gallery/">Gallery</ListLink>
        <ListLink to="/faq/">FAQ</ListLink>

        <ListLink to="/now-hiring">Now Hiring!</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
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
