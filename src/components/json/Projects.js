const andreisleal = "/public/Resource/img/proyectos/andreis.png";
const biofood = "/public/Resource/img/proyectos/biofood.png";
const campusultra = "/public/Resource/img/proyectos/campus-ultra.png";
const gascaribe = "/public/Resource/img/proyectos/gases-del-caribe.png";
const alutraficled = "/public/Resource/img/proyectos/alutraficled.png";
const png = "/public/Resource/img/proyectos/png.png";
const agenciapopuli = "/public/Resource/img/proyectos/populi.png";
const ultracem_colombia = "/public/Resource/img/proyectos/ultracem-col.png";
const ultracem_honduras = "/public/Resource/img/proyectos/ultracem-hon.png";
const ultracem_guatemala = "/public/Resource/img/proyectos/ultracem-gua.png";
const ultracem_panama = "/public/Resource/img/proyectos/ultracem-pan.png";
const codegar = "/public/Resource/img/proyectos/codegar.png";
const casalianza = "/public/Resource/img/proyectos/casalianza.png";
const infortec = "/public/Resource/img/proyectos/infortec.png";
const sneaker = "/public/Resource/img/proyectos/sneaker.png";
const sole = "/public/Resource/img/proyectos/sole.png";
const portafolio = "/public/Resource/img/proyectos/portafolio.png";
const seven = "/public/Resource/img/proyectos/seven-time.png";
const wtc = "/public/Resource/img/proyectos/wtc.png";
const neurodiagnostico = "/public/Resource/img/proyectos/neurodiagnostico.png";
const vigimonstruos = "/public/Resource/img/proyectos/vigimonstruos.png";



const dataProjects = {
  titulo: ["P", "R", "O", "J", "E", "C", "T", "S"],
  botones: ["All", "Code", "C M S"],
  proyectos: [
    {
      id: 1,
      img: andreisleal,
      proyecto: "De Andreis",
      category: ['all', 'code'],
      url: "https://portal.deandreislegal.co/login",
      tecnologias: ["React", "Bootstrap", "Typescript","Javascript", "Figma"],
      active: true,
    },
    {
      id: 2,
      img: biofood,
      proyecto: "Biofood",
      category: ['all', 'code'],
      url: "https://biofoodsoftware.com/",
      tecnologias: ["Vanilla Js", "Bootstrap", "CSS", "Javasript"],
      active: true,
    },
    {
      id: 3,
      img: png,
      category: ['all', 'code'],
      url: 'https://pngtechnology.netlify.app/',
      // url: "https://pngtechnology.co/",
      proyecto: "PNG Technology Solutions",
      tecnologias: ["Vanilla Js", "Bootstrap", "CSS", "Javasript"],
      active: true,
    },
    {
      id: 4,
      img: portafolio,
      proyecto: "Portafolio",
      category: ['all', 'code'],
      url: "https://jeisondev.pro/",
      tecnologias: ["Astro", "Typescript","Javascript","React","Bootstrap", "Figma"],
      active: true,
    },
    {
      id: 5,
      img: agenciapopuli,
      proyecto: "ADN Populi",
      url: "https://agenciapopuli.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 6,
      img: gascaribe,
      proyecto: "Gases del caribe",
      url: "https://gascaribe.com/",
      tecnologias: ["WordPress", "Divi"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 7,
      img: alutraficled,
      proyecto: "AlutraficLed",
      url: "https://alutraficled.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 8,
      img: codegar,
      proyecto: "Codegar",
      url: "https://codegar.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 9,
      img: campusultra,
      proyecto: "Campus Ultra",
      url: "https://campusultra.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 10,
      img: casalianza,
      proyecto: "Casalianza",
      url: "https://www.casalianzacolombia.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 11,
      img: infortec,
      proyecto: "Infortec",
      url: "https://www.infortec.co/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 12,
      img: sneaker,
      proyecto: "Sneaker Girl",
      url: "https://sneakergirls.store/",
      tecnologias: ["WordPress", "WooCommerce", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 13,
      img: sole,
      proyecto: "Solé",
      url: "https://www.solesoluciones.com/",
      tecnologias: ["WordPress", "WooCommerce", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 14,
      img: seven,
      proyecto: "Seven 7imes",
      url: "https://seven7times.com/",
      tecnologias: ["WordPress","WooCommerce", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 15,
      img: wtc,
      proyecto: "World Trade Center",
      url: "https://wtcpereira.com/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 16,
      img: vigimonstruos,
      proyecto: "VigiMonstruos",
      url: "https://vigimonstruos.aseopereira.gov.co/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 17,
      img: neurodiagnostico,
      proyecto: "Neurodiagnostico",
      url: "http://www.neurodiagnostico.com.co/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    {
      id: 18,
      img: ultracem_colombia,
      proyecto: "Campus Ultra Colombia",
      url: "https://ultracem.co/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    ,
    {
      id: 19,
      img: ultracem_honduras,
      proyecto: "Campus Ultra Honduras",
      url: "https://ultracem.hn/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    ,
    {
      id: 20,
      img: ultracem_guatemala,
      proyecto: "Campus Ultra Guatemala",
      url: "https://ultracem.gt/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
    ,
    {
      id: 21,
      img: ultracem_panama,
      proyecto: "Campus Ultra Panamá",
      url: "https://ultracem.pa/",
      tecnologias: ["WordPress", "Elementor", "Figma"],
      active: true,
      category: ['all',"cms"]
    },
  ],
};

export default dataProjects;
