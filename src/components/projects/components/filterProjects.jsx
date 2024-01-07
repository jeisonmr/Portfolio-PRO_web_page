import React, { useEffect, useState } from "react";
import DataProjects from "../../json/Projects";
import { ProjectCard } from "../components/ProjectCard";
import "./filterStyle.css";

export const FilterProjects = () => {
  return (
    <main id="works" class="projectContainer">
      <main className="containerMenu">
        <button className={""} onClick={""}>
          {DataProjects.botones[0]}
        </button>

        <button className={""} onClick={""}>
          {DataProjects.botones[1]}
        </button>

        <button className={""} onClick={""}>
          {DataProjects.botones[2]}
        </button>
      </main>

      <main class="projectCard__Container">
        {DataProjects.proyectos.map((items) => {
          return (
            <ProjectCard
              img={items.img}
              url={items.url}
              title={items.proyecto}
              stack={items.tecnologias}
            />
          );
        })}
      </main>
    </main>
  );
};
