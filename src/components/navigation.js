import React from 'react'

const Navigation = () => (
  <div class="navigation">
    <input type="checkbox" id="navi-toggle" ClassName="navigation__checkbox" />
    <label for="navi-toggle" ClassName="navigation__button">
      <span ClassName="navigation__icon">&nbsp;</span>
    </label>
    <div ClassName="navigation__background">&nbsp;</div>
    <nav ClassName="navigation__nav">
      <ul ClassName="navigation__list">
        <li ClassName="navigation__item">
          <a href="#about" ClassName="navigation__link">
            About
          </a>
        </li>
        <li ClassName="navigation__item">
          <a href="#gallery" ClassName="navigation__link">
            Gallery
          </a>
        </li>
        <li ClassName="navigation__item">
          <a href="#faq" ClassName="navigation__link">
            FAQ
          </a>
        </li>
        <li ClassName="navigation__item">
          <a href="#hiring" ClassName="navigation__link">
            Now hiring!
          </a>
        </li>
        <li ClassName="navigation__item">
          <a href="#contact" ClassName="navigation__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
)
