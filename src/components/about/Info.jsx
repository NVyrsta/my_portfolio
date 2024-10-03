import React from "react";

export const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1,5+ years of development</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">14+ Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">CodeWars</h3>
        <span className="about__subtitle">157+ Kata, rank 4kyu</span>
      </div>
    </div>
  );
};
