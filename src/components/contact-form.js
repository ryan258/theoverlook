import React from 'react'

const ContactForm = () => {
  return (
    <form action="https://formsubmit.co/ryanleejwebdev@gmail.com" method="POST">
      <input type="hidden" name="_next" value="https://ryanleej.com/thanks.html" />
      <input type="hidden" name="_subject" value="New Form Submission from Your Website! 🥳" />
      {/* <input type="text" name="_honey" style="display: none" /> */}
      <input type="hidden" name="_captcha" value="false" />

      <input type="email" name="email" placeholder="Email Address" required />
      <input type="text" name="name" placeholder="Your Name" required />
      <textarea name="w3review" rows="4" cols="50" placeholder="Write your message here 👻"></textarea>

      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
