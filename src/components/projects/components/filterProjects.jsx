import React, { useEffect, useState } from "react";
import DataProjects from "../../json/Projects";
import { ProjectCard } from "../components/ProjectCard";
import "./filterStyle.css";



export const FilterProjects = () => {


  const [all, code, cms] = DataProjects.botones;

  const [codeBtn, setCodeBtn] = useState([]);

  function filterListProjects(){

    let codeList = DataProjects.proyectos.filter((code) =>code.category === 'code');
    setCodeBtn(codeList);
    console.log(codeBtn);
  }

  useEffect(() => {
    filterListProjects();
  }, [])
  

  return (
    <section id="works" class="projectContainer">
      {/* <main className="containerMenu">
        <button className={""} onClick={""}>
          {all}
        </button>

        <button onClick={filterListProjects}>
          {code}
        </button>

        <button onClick={''} className={""}>
          {cms}
        </button>
      </main> */}

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
    </section>
  );
};
