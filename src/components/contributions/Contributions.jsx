import React from "react";
import GithubActivity from "./GithubActivity";
import "./contributions.css";

export const Contributions = () => {
  return (
    <section
      className="contributions section"
      id="contributions"
    >
      <div className="container">
        <h2 className="section__title">Contribution activity</h2>
        <span className="section__subtitle">
          1,987 contributions in the last year
        </span>

        <div className="wrapper">
          <GithubActivity />
        </div>
      </div>
    </section>
  );
};
