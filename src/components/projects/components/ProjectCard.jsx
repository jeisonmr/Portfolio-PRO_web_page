import React from 'react'
import "./cardStyle.css";

export const ProjectCard = ({img, title, url, stack} ) => {

  console.log('Hola');

  console.log(url)

  return (
    <div className="card">
      <img className="front" src={img} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <div>
          <ul>
            {stack.map((stackItems) => {
              return <li>{stackItems}</li>;
            })}
          </ul>
        </div>
        <button>
          <a href={url} target="_blank">
            View online
          </a>
        </button>
      </div>
    </div>
  );
};
