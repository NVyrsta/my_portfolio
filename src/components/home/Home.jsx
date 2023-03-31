import React from 'react';
import './home.css';
import { Social } from './Social';
import { Data } from './Data';
import { ScrollDown } from './ScrollDown';

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div
            className="home__img"
            style={{ borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }}
          ></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}
