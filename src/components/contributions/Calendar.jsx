import React, { useEffect, useRef } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css";
// import "./GithubActivity.css"; // Стилі перенесені в окремий CSS файл

const GithubActivity = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    // Викликаємо GitHubCalendar при монтуванні компонента
    GitHubCalendar(calendarRef.current, "nvyrsta", {
      global_stats: false,
      tooltips: true,
      responsive: true,
    });
  }, []);

  return (
    <div>
      <h2>Contribution activity</h2>
      <div
        ref={calendarRef}
        id="github-calendar"
      ></div>
    </div>
  );
};

export default GithubActivity;
