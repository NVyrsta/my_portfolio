import React, { useState } from 'react';
import './header.css';
import classnames from 'classnames';

export const Header = () => {
  // ---- Toggle Menu
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const onToggleMenu = () => {
    setShowMenu(!showMenu);
  }
  // ---------------------------------------------
    window.addEventListener('scroll', function () {
      const header = document.querySelector('.header');

      if (this.scrollY > 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">LOGO</a>

        <div
          className={classnames('nav__menu', {
            'show-menu': showMenu
          })}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={classnames('nav__link', {
                  'active-link': activeNav === '#home'
                })}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={classnames('nav__link', {
                  'active-link': activeNav === '#about'
                })}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={classnames('nav__link', {
                  'active-link': activeNav === '#skills'
                })}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={classnames('nav__link', {
                  'active-link': activeNav === '#portfolio'
                })}
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={classnames('nav__link', {
                  'active-link': activeNav === '#contact'
                })}
              >
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
