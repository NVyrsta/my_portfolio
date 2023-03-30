import React, { useState, useEffect } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import { WorkItem } from './WorkItem';
import classNames from 'classnames';

export const Works = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    if (currentTab === 'all') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === currentTab
      );
      setProjects(filteredProjects);
    }
  }, [currentTab]);

  return (
    <>
      <div className="work__filters">
        {projectsNav.map(({ name }) => (
          <span
            key={name}
            onClick={() => {
              setCurrentTab(name);
            }}
            className={classNames('work__item', {
              'active-tab': currentTab === name,
            })}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
