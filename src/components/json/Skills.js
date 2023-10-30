import html from "../../../public/Resource/img/habilidades/htmlg.webp";
import css from "/public/Resource/img/habilidades/cssg.webp";
import sass from "/public/Resource/img/habilidades/sassg.webp"
import javascript from "/public/Resource/img/habilidades/javascriptg.webp";
import typescript from "/public/Resource/img/habilidades/typescriptg.webp";
// ----------------------------------------------------------------
import react from "/public/Resource/img/habilidades/Reactg.webp";
import bootstrap from "/public/Resource/img/habilidades/bootstrapg.webp";
import astro from "/public/Resource/img/habilidades/astrog.webp";
import tailwindcss from "/public/Resource/img/habilidades/tailwindcssg.webp";
// ----------------------------------------------------------------
import azure from "/public/Resource/img/habilidades/azureg.webp";
import git from "/public/Resource/img/habilidades/gitg.webp";
import github from "/public/Resource/img/habilidades/githubg.webp";
import sourcetree from "/public/Resource/img/habilidades/sourcetreeg.webp";
import jira from "/public/Resource/img/habilidades/jirag.webp";
import trello from "/public/Resource/img/habilidades/trellog.webp";
import slack from "/public/Resource/img/habilidades/codeg.webp"

// ----------------------------------------------------------------
import wordpress from "/public/Resource/img/habilidades/wpg.webp";
import elementor from "/public/Resource/img/habilidades/elementorg.webp"
import divi from "/public/Resource/img/habilidades/divig.webp";
import woocommerce from "/public/Resource/img/habilidades/woog.webp";
// ----------------------------------------------------------------
import png from "/public/Resource/img/experiencia/pngg.webp";
import freelancer from "/public/Resource/img/experiencia/freeg.webp";
import canadian from "/public/Resource/img/experiencia/canadiang.webp";
import jv from "/public/Resource/img/experiencia/jvg.webp";
import populi from "/public/Resource/img/experiencia/populig.webp";
// ----------------------------------------------------------------
import playa from "/public/Resource/img/hobbies/playag.webp";
import cine from "/public/Resource/img/hobbies/cineg.webp";
import gym from "/public/Resource/img/hobbies/gymg.webp";
import estudio from "/public/Resource/img/hobbies/codeg.webp";
import logo from "/public/Resource/img/logos/jm.webp";

const dataSkills = {
  habilidades: {
    titulo: ["H","A","B","I","L","I","D","A","D","E","S"],
    subt1: "Lenguajes",
    lenguajes: [
      {
        img: html,
        lenguaje: "HTML",
      },
      {
        img: css,
        lenguaje: "CSS",
      },
      {
        img: sass,
        lenguaje: "Sass",
      },
      {
        img: javascript,
        lenguaje: "JavaScript",
      },
      {
        img: typescript,
        lenguaje: "TypeScript",
      },
    ],
    subt2: "Frameworks",
    frameworks: [
      {
        img: react,
        framework: "React",
      },
      {
        img: astro,
        framework: "Astro",
      },
      {
        img: bootstrap,
        framework: "Bootstrap",
      },
      {
        img: tailwindcss,
        framework: "TailwindCSS",
      },
    ],
    subt3: "C M S",
    plugins: [
      {
        img: wordpress,
        plugin: "WordPress",
      },
      {
        img: elementor,
        plugin: "Elementor",
      },
      {
        img: divi,
        plugin: "Divi",
      },
      {
        img: woocommerce,
        plugin: "WooCommerce",
      },
    ],
    subt4: "Management",
    management: [
      {
        img: azure,
        plugin: "Azure Devops",
      },
      {
        img: git,
        plugin: "Git",
      },
      {
        img: github,
        plugin: "GitHub",
      },
      {
        img: sourcetree,
        plugin: "Sourcetree",
      },
      {
        img: jira,
        plugin: "Jira",
      },
      {
        img: trello,
        plugin: "Trello",
      },
      {
        img: slack,
        plugin: "Slack",
      },
    ],
  },
  experiencias: {
    titulo: ["E","X","P","E","R","I","E","N","C","I","A"],
    experiencia: [
      {
        img: png,
        empresa: "PNG Technology Solutions",
        cargo: ["Developer Web Front end"],
      },
      {
        img: freelancer,
        empresa: "Freelancer",
        cargo: ["Developer Web Front End,  ", "WordPress Design"],
      },
      {
        img: canadian,
        empresa: "Canadian PVC",
        cargo: "Development Engineer",
      },
      {
        img: jv,
        empresa: "JV Disingelect",
        cargo: ["Developer Web Front End,  ", " WordPress Design"],
      },
      {
        img: populi,
        empresa: "Populi",
        cargo: ["WordPress Design"],
      },
    ],
  },
  educacion: {
    titulo: ["E","D","U","C","A","C","I","Ó","N"],
    profesional: [
      {
        titulado: "Ingeniero de sistemas",
        cartificado: "Politecnico de la Costa Atlantica",
      },
      {
        tituladoo: "SCRUM Foundation",
        cartificadoo: "CertiProf",
      },
      {
        tituladoo: "Magister Ingenieria y Computo",
        cartificadoo: "Universidad Simon Bolivar",
      },
    ],
  },
  personales: {
    titulo: ["H.","P","E","R","S","O","N","A","L","E","S"],
    descripcion: ["Trabajo en equipo","Creativo","Liderazgo","Autocontrol","Resolución de problemas"],
  },
  hobbies: {
    titulo: ["H","O","B","B","I","E","S"],
    hobbies: [
      {
        titulo: "Playa",
        imagen: playa,
      },
      {
        titulo: "Cine",
        imagen: cine,
      },
      {
        titulo: "GyM",
        imagen: gym,
      },
      {
        titulo: "Estudio",
        imagen: estudio,
      },
    ],
  },
  logotipo: logo
};

export default dataSkills;
