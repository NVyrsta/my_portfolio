import React from 'react';

export const WorkItem = ({ item }) => {
  const { id, image, title, demo, code } = item;

  return (
    <div className="work__card" key={id}>
      <img src={image} alt="Project" className="work__img" />
      <h3 className="work__title">{title}</h3>
      <a href={demo} className="work__button" target="_blank" rel="noreferrer">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      <a href={code} className="work__button" target="_blank" rel="noreferrer">
        Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}
