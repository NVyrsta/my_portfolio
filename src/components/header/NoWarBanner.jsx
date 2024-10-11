import React from "react";
import "./NoWarBanner.css";

const NoWarBanner = () => {
  return (
    <a
      id="no-war-banner"
      href="https://www.ukrfund.org/"
      className="em-ribbon"
      title="Do something to stop this war! Russians are killing our children and civilians!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">
        Stop the war in Ukraine. Support through donations.
      </span>
    </a>
  );
};

export default NoWarBanner;
