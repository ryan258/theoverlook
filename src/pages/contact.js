import * as React from 'react'
import Container from '../components/container'
import Layout from '../components/layout'

import ContactForm from '../components/contact-form'

const Contact = () => {
  return (
    <Layout>
      <Container>
        <h1>Get in touch!</h1>
        <ContactForm />
        <p>or book your stay today!</p>
      </Container>
    </Layout>
  )
}

export default Contact
