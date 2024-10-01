import DefCat1 from "../assets/images/jpg/cat-2605502_1280.jpg";
import DefCat2 from "../assets/images/jpg/cat-323262_1280.jpg";
import DefCat3 from "../assets/images/jpg/kitten-4611189_1280.jpg";

import Project1Home from "../assets/images/png/project1/home.png";
import Project1Project from "../assets/images/png/project1/project.png";
import Project1About from "../assets/images/png/project1/about.png";
import Project1GitHub from "../assets/images/png/project1/github.png";
import Project1About2 from "../assets/images/png/project1/about2.png";

//Exporta las imagenes del carousel en forma de arreglos
export const itemsDefault = [
    { id: 1, content: "Imagen 1", image: DefCat1 },
    { id: 2, content: "Imagen 2", image: DefCat2 },
    { id: 3, content: "Imagen 3", image: DefCat3 },
  ];

  export const itemsTxtDefault = [
    { title: "Default", subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  ];

export const items1 = [
    { id: 1, content: "Portafolio: Página principal", image: Project1Home },
    { id: 2, content: "Portafolio: Proyectos", image: Project1Project },
    { id: 3, content: "Portafolio: Sobre mí", image: Project1About },
    { id: 4, content: "Portafolio: Código fuente en GitHub", image: Project1GitHub },
    { id: 5, content: "Portafolio: Vista móvil", image: Project1About2 },
  ];

  export const itemsTxt1 = [
    { title: "Portafolio", subTitle: "Portafolio profesional, creado en React con Tailwind, librerías usadas: react-icons, react-router, Framer Motion.", git: "https://github.com/AlonsoLo-123/portafolio", demo: "https://alonsolo-123.github.io/portafolio/"},
  ];
