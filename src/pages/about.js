import * as React from 'react'
// import { Link } from 'gatsby'
import Container from '../components/container'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <p>Oh this old place has had an illustrious past. In its heyday it was one of the stopping places for the jet set, even before anybody knew what a jet set was. We've had four presidents who stayed here, lots of movie stars, royalty, all the best people.</p>
      <Container>
        <title>About The Overlook Hotel</title>
        <h1>colors - gold, green, red</h1>
        <h1>Open For Business</h1>
        <ul>
          <li>Open from May 15th to October 30th - 168 days</li>
          <li>closed for 25miles of road, avg of 20 ft of snow during the winter </li>
          <li>place was built in 1907</li>
          <li>chosen for its seclusion and scenic beauty</li>
          {/* <li>As a matter of fact we eh... brought a decorator in from Chicago just last year to refurbish this part of the hotel.</li>
          <li>Oh well he sure did a beautiful job. Pink and gold are my favorite colors. - Wendy T</li> */}
        </ul>

        <h2>Staff</h2>
        <p> This is Dick Halloran, our Head Chef.</p>
        <p>Delbert Grady. </p>
        <p>Lloyd, your friendly bartender</p>

        <h2>Areas</h2>
        <h3>The Colorado Lounge</h3>
        <p>This is our Colorado Lounge.</p>

        <h3>Hedge Maze</h3>
        <p>This is our famous hedge maze. It's quite an attraction around here. The walls are thirteen feet high and the hedges are about as old as the hotel itself. It's a lot of fun, but I wouldn't go in there unless I had an hour to spare to find my way out. </p>
        <h3>The Gold Ballroom</h3>
        <p>Oh...well this is our gold ballroom</p>
        <p>We can accommodate up to three hundred people here very comfortably. </p>
        <h3>Room 237</h3>
        <p></p>

        <h2>Testimonials</h2>
        <p>As a matter of fact this is probably the most gorgeous hotel I've ever seen. - Shelly</p>
        <p>I guess you could say the Overlook Hotel here has something about it that's like shining. - Halloran</p>
        <p>I've never been this happy, or comfortable anywhere. - Jack</p>
        <p>Good. I want you to like it here. I wish we could stay here for ever, and ever... ever. - Jack</p>

        <p>So, won't you join us?</p>
      </Container>
    </Layout>
  )
}

export default About
