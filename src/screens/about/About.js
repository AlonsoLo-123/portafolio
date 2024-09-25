import React from 'react'
import '../about/About.css'
import Photo from '../../assets/images/jpg/fotografia.jpg'
import AboutJobCard from "../../components/aboutJobCard/AboutJobCard"
import AboutSkillCard from '../../components/aboutSkillCard/AboutSkillCard'
import { job1, job2, job3 } from '../../utils/ItemsAbout'
import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";

export default function About() {
    
  return (
    <div className='flex pt-20 h-screen flex-col'>
      <div className = 'px-10 py-10  lg:px-[18%] border-b-2 border-white/50'>
        <p className = "AboutTextStyle Title pb-4">Resumen Profesional</p>
        <p className = "AboutTextStyle Content">
            Soy un desarrollador de software con experiencia en la creación y mantenimiento de proyectos utilizando C#, Java y principios de Programación Orientada a Objetos. Tengo un fuerte compromiso con la mejora continua, adoptando las mejores prácticas de desarrollo para garantizar soluciones robustas y escalables que satisfagan las necesidades del cliente.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row flex-grow'>
        <div className='max-h-full max-w-full m-auto'>
            <img src={Photo} alt="Alonso Lopez Olguin" className='rounded-full flex object-contain scale-75'/>
        </div>
        <div className='border-s-2 border-white/50 scale-75'/>
        <div className = 'px-10 py-7 lg:px-10 w-full h-full'>
            <div className = 'flex flex-col lg:flex-row h-full'>
                <div className = "AboutTextStyle Content w-full h-full">
                  <p className = "AboutTextStyle Title pb-7">Experiencia Laboral</p>
                  <AboutJobCard title = {"Toshiba Global Commerce Solutions"} content ={job1}/>
                  <AboutJobCard title = {"CodeJar"} content ={job2}/>
                  <AboutJobCard title = {"Centro de Extensión Universitaria / Difusión Cultural"} content ={job3}/>
                </div>
                <div className = 'flex w-full h-full flex-col'>
                    <p className = "AboutTextStyle Title pb-7">Habilidades</p>
                        <div className = 'flex flex-wrap justify-start w-full lg:px-5'>
                            <AboutSkillCard text = {"Git Hub"} icon = {<FaGithub size={50} color='white'/>}/>
                            <AboutSkillCard text = {"JavaScript"} icon = {<IoLogoJavascript size={50} color='#F7E018'/>}/>
                            <AboutSkillCard text = {"Css"} icon = {<FaCss3Alt size={50} color='#214CE5'/>}/>
                            <AboutSkillCard text = {"Html"} icon = {<FaHtml5  size={50} color='#E54C21'/>}/>
                            <AboutSkillCard text = {"Tailwind"} icon = {<RiTailwindCssFill size={50} color='rgb(56, 189, 248)'/>}/>
                            <AboutSkillCard text = {"React"} icon = {<FaReact size={50} color='rgb(88 196 220)'/>}/>
                            <AboutSkillCard text = {"C #"} icon = {<SiCsharp size={50} color='#9B4F97'/>}/>
                        </div>
                </div>
            </div>
        </div>
      </div>
      <div className = 'flex border-t-2 border-white/50 justify-end align-bottom py-3 flex-col bg-black'>
        <div className = 'flex w-full flex-col AboutTextStyle SubTitle items-center'>
            <p className = "AboutTextStyle Title"> Datos de contacto:</p>
            <div className = 'flex flex-row'>
                <p>Teléfono:</p>
                <p className = 'text-green-lime ps-1'>7721327875</p>
            </div>
            <div className = 'flex flex-row'>
                <p> Correo:</p>
                <p className = 'text-green-lime ps-1'>outbreakalonzo@gmail.com</p>
            </div>
        </div>
        <div className = 'flex justify-end align-bottom w-full ps-7 lg:pe-7'>
            <p className = "AboutTextStyle Content"> Fraccionamiento Bartolino recidencial. Calle San colombano Zempoala, Hgo.</p>
        </div>
      </div>
    </div>
  )
}
