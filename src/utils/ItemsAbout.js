import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";

export const job1 = (
    <>
        Junio 2023–Septiembre 2023
        <br/>Soporte técnico a equipo comercial
        <br/>Service representative I
    </>
);

export const job2 = (
    <>
        Septiembre 2020–Enero 2021
        <br/>Desarrollador Frontend-Backend
        <br/>Desarrollo de App
    </>
);

export const job3 = (
    <>
        Agosto 2019–Junio 2020
        <br/>Practicante
    </>
);

export const summary = "Soy un desarrollador web con experiencia en la creación y mantenimiento de proyectos utilizando tecnologías modernas como HTML, CSS, JavaScript, y frameworks como React y Tailwind CSS. Me especializo en la creación de interfaces de usuario intuitivas y en la optimización de la experiencia del usuario, adoptando las mejores prácticas de desarrollo para garantizar soluciones escalables y eficientes que cumplan con las expectativas del cliente."

export const  jobCardsData = [
    { title: "Toshiba Global Commerce Solutions", content: job1 },
    { title: "CodeJar", content: job2 },
    { title: "Centro de Extensión Universitaria / Difusión Cultural", content: job3 }
]

export const skillsCardsData = [
    { text: "Git Hub", icon: <FaGithub size={50} color='white'/>},
    { text: "JavaScript", icon: <IoLogoJavascript size={50} color='#F7E018'/>},
    { text: "Css", icon: <FaCss3Alt size={50} color='#214CE5'/>},
    { text: "Html", icon: <FaHtml5  size={50} color='#E54C21'/>},
    { text: "Tailwind", icon: <RiTailwindCssFill size={50} color='rgb(56, 189, 248)'/>},
    { text: "React", icon: <FaReact size={50} color='rgb(88 196 220)'/>},
    { text: "C #", icon: <SiCsharp size={50} color='#9B4F97'/>}
]