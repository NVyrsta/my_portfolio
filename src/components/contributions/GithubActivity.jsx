import React, { useEffect, useRef } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css";

const GithubActivity = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    GitHubCalendar(calendarRef.current, "nvyrsta", {
      global_stats: false,
      tooltips: true,
      responsive: true,
    });
  }, []);

  return (
    <div>
      <div
        ref={calendarRef}
        id="github-calendar"
      ></div>
    </div>
  );
};

export default GithubActivity;
