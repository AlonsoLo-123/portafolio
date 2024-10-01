import React from 'react'
import Photo from '../../assets/images/jpg/fotografia.jpg'
import AboutJobCard from "../../components/aboutJobCard/AboutJobCard"
import AboutSkillCard from '../../components/aboutSkillCard/AboutSkillCard'
import { job1, job2, job3, Summary } from '../../utils/ItemsAbout'
import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCsharp } from "react-icons/si";
import { motion } from "framer-motion"

export default function About() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };
  
  const itemSkill = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const itemJob = {
    hidden: { y: 20, opacity: 0, scaleY:0},
    visible: { y: 0, opacity: 1, scaleY:1}
  };

  return (
    <div className='flex pt-20 h-screen flex-col backdrop-blur-lg'>
      <div className = 'px-10 py-10  lg:px-[18%] border-b-2 border-white/25 bg-white/15'>
        <p className = "maintext-center text-white text-sub pb-4">Resumen Profesional</p>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:2 }} className = "maintext text-white text-content">{Summary}</motion.p>
      </div>
      <div className='flex flex-col lg:flex-row flex-grow'>
        <motion.div initial={{ opacity: 0, scale: 0 }}  animate={{ opacity: 1, scale: 1 }}  transition={{ duration: 0.5 }} className='flex justify-center items-center max-h-full max-w-full m-[10%] lg:m-[5%]'>
          <img src={Photo} alt="Alonso Lopez Olguin" className='rounded-full flex object-contain brightness-90'/>
        </motion.div>
        <div className='border-s-2 border-white/50 scale-75'/>
        <div className = 'px-10 py-7 lg:px-10 w-full h-full'>
          <div className = 'flex flex-col lg:flex-row h-full'>
            <div className = "maintext text-white text-content w-full h-full">
              <p className = "maintext-center text-white text-sub pb-7">Experiencia Laboral</p>
              <motion.div variants={container} initial="hidden" animate="visible">
                <AboutJobCard variants={itemJob} title = {"Toshiba Global Commerce Solutions"} content ={job1}/>
                <AboutJobCard variants={itemJob} title = {"CodeJar"} content ={job2}/>
                <AboutJobCard variants={itemJob} title = {"Centro de Extensión Universitaria / Difusión Cultural"} content ={job3}/>
              </motion.div>
            </div>
            <div className = 'flex w-full h-full flex-col'>
              <p className = "maintext-center text-white text-sub py-7 lg:py-0 lg:pb-7">Habilidades</p>
              <motion.div variants={container} initial="hidden" animate="visible" className = 'flex flex-wrap justify-start w-full lg:px-5'>
                <AboutSkillCard variants={itemSkill} text = {"Git Hub"} icon = {<FaGithub size={50} color='white'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"JavaScript"} icon = {<IoLogoJavascript size={50} color='#F7E018'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"Css"} icon = {<FaCss3Alt size={50} color='#214CE5'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"Html"} icon = {<FaHtml5  size={50} color='#E54C21'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"Tailwind"} icon = {<RiTailwindCssFill size={50} color='rgb(56, 189, 248)'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"React"} icon = {<FaReact size={50} color='rgb(88 196 220)'/>}/>
                <AboutSkillCard variants={itemSkill} text = {"C #"} icon = {<SiCsharp size={50} color='#9B4F97'/>}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className = 'flex border-t-2 border-white/25 justify-end align-bottom py-3 flex-col bg-white/15'>
        <div className = 'flex w-full flex-col maintext text-contentbig text-white items-center'>
            <p className = "maintext-center text-white text-sub"> Datos de contacto:</p>
            <p>Teléfono:<span className = 'text-green-lime ps-1'>7721327875</span></p>
            <p> Correo: <span className = 'text-acua-lime ps-1'>outbreakalonzo@gmail.com</span></p>
        </div>
        <div className = 'flex justify-end align-bottom w-full ps-7 lg:pe-7'>
            <p className = "maintext text-content text-white"> Fraccionamiento Bartolino recidencial. Calle San colombano Zempoala, Hgo.</p>
        </div>
      </div>
    </div>
  )
}
