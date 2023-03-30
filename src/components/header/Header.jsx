import React, { useState } from 'react';
import './header.css';
import classnames from 'classnames';

export const Header = () => {
  // ---- Toggle Menu
  const [showMenu, setShowMenu] = useState(false);

  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  }
  // ---------------------------------------------

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
        </a>

        <div
          className={classnames('nav__menu', {
            'show-menu': showMenu
          })}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon active-link"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={onToggleMenu}></i>
        </div>

        <div className="nav__toggle" onClick={onToggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
