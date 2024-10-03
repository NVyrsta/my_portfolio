import React from "react";
import "./work.css";
import fixIQ from "../../assets/fixIQ.svg";

export const Work = () => {
  return (
    <section
      className="work section"
      id="work"
    >
      <div className="container">
        <h2 className="section__title">WORK EXPERIENCE</h2>
        <span className="section__subtitle">Roles and Responsibilities</span>

        <article className="work-experience">
          <div className="company-info">
            <div className="logo-container">
              <img
                src={fixIQ}
                alt="FixIQ Pro Logo"
                className="company-logo"
              />
            </div>
            <div className="company-details">
              <h3 className="job-title">Frontend Developer</h3>
              <p className="company-name">
                <strong>FixIQ Pro</strong>
              </p>
              <p className="work-period">
                <em>June 2023 – Present</em>
              </p>
            </div>
          </div>
          <div className="job-details">
            <ul className="responsibilities">
              <li>
                Develop and maintain advanced features using{" "}
                <strong>Vue.js</strong> and <strong>Vuex</strong> for efficient
                state management.
              </li>
              <li>
                Implement scalable micro frontends using{" "}
                <strong>Solid.js</strong> to enhance system modularity.
              </li>
              <li>
                Build responsive and dynamic user interfaces based on detailed
                design mockups, ensuring cross-platform compatibility.
              </li>
              <li>
                Perform code reviews, adhering to best practices and maintaining
                code quality.
              </li>
              <li>
                Optimize API integrations and manage <strong>Vuex</strong> state
                for seamless application performance.
              </li>
              <li>
                Implement internationalization (<strong>i18n</strong>) for
                multi-language support.
              </li>
              <li>
                Collaborate in team meetings, contributing to project planning
                and feature discussions.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
