import React from "react";
import GithubActivity from "./Calendar";
// import GitHubCalendar from "react-github-calendar";

export const Contributions = () => {
  return (
    <section
      className="work section"
      id="contributions"
    >
      <h2 className="section__title">Contributions</h2>
      <span className="section__subtitle">Contributions</span>

      <GithubActivity />
    </section>
  );
};
