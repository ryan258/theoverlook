import * as React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container row">
        <div className="footer__description col-2-of-4">
          <h1 className="footer__site-name">Overlook Hotel</h1>
          <p className="footer__description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores sapiente exercitationem dignissimos. Quod consequuntur eaque repudiandae labore enim corrupti itaque rerum vitae deserunt voluptas, iure, ad fugiat tempora reiciendis.</p>
        </div>
        <div className="footer__contact col-1-of-4">
          <h2 className="footer__header">Contact Us</h2>
          <div className="footer__contact__details">
            <div className="footer__contact__street">237 Overlook Drive</div>
            <div className="footer__contact__city">Estes Park, CO 80517</div>
            <div className="footer__contact__phone">Tel: +1 800 867 5309</div>
            <div className="footer__contact__fax">Fax: +1 800 903 5768</div>
            <div className="footer__contact__email">info@theoverlookhotel.com</div>
          </div>
        </div>
        <div className="footer__subscribe col-1-of-4">
          <h2 className="footer__header">Get updates</h2>
          <form className="footer__subscribe__form">
            <input className="footer__subscribe__email-input" type="text" placeholder="Your email here" />
          </form>
          <p className="footer__subscribe__instructions">Enter your email address for special offers and news.</p>
        </div>
      </div>
      <div className="footer__copyright row">Copyright &copy; The Overlook Hotel by Spooky Ghosts</div>
    </footer>
  )
}

export default Footer
