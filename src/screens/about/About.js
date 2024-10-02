import React from 'react'
import Photo from '../../assets/images/jpg/fotografia.jpg'
import AboutJobCard from "../../components/aboutJobCard/AboutJobCard"
import AboutSkillCard from '../../components/aboutSkillCard/AboutSkillCard'
import { summary, jobCardsData, skillsCardsData } from '../../utils/ItemsAbout'
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
    <div className='flex pt-20 h-screen flex-col'>
      <div className = 'py-10 border-b-2 border-white/25 bg-acua-lime/5'>
        <p className = "maintext-center text-black text-sub pb-7">Resumen Profesional</p>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:2 }} className = "maintext bg-white-lime/75 px-[7%] p-2 text-black text-content shadow-lg shadow-black/5">{summary}</motion.p>
      </div>
      <div className='flex flex-col lg:flex-row flex-grow'>
        <motion.div initial={{ opacity: 0, scale: 0 }}  animate={{ opacity: 1, scale: 1 }}  transition={{ duration: 0.5 }} className='flex justify-center items-center max-h-full max-w-full m-[10%] lg:m-[5%]'>
          <img src={Photo} alt="Alonso Lopez Olguin" className='rounded-full flex object-contain brightness-90'/>
        </motion.div>
        <div className='border-s-2 border-white/50 scale-75'/>
        <div className = 'px-10 py-7 lg:px-10 w-full h-full'>
          <div className = 'flex flex-col lg:flex-row h-full'>
            <div className = "maintext text-black text-content w-full h-full">
              <p className = "maintext-center text-black text-sub pb-7">Experiencia Laboral</p>
              <motion.div variants={container} initial="hidden" animate="visible">
                {jobCardsData.map((card, index) => (
                  <AboutJobCard variants={itemJob} title = {card.title} content ={card.content}/>
                ))}
              </motion.div>
            </div>
            <div className = 'flex w-full h-full flex-col'>
              <p className = "maintext-center text-black text-sub py-7 lg:py-0 lg:pb-5">Habilidades</p>
              <motion.div variants={container} initial="hidden" animate="visible" className = 'flex flex-wrap justify-start w-full lg:px-5'>
                {skillsCardsData.map((card, index) => (
                  <AboutSkillCard variants={itemSkill} text = {card.text} icon = {card.icon}/>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className = 'flex border-t-2 border-white/25 justify-end align-bottom py-3 flex-col bg-black/15'>
        <div className = 'flex w-full flex-col maintext text-contentbig text-white items-center'>
            <p className = "maintext-center text-white text-sub"> Datos de contacto:</p>
            <p>Teléfono:<span className = 'text-green-lime ms-1 bg-black/25 px-2 rounded-md'>7721327875</span></p>
            <p> Correo: <span className = 'text-acua-lime ms-1 bg-black/25 px-2 rounded-md'>outbreakalonzo@gmail.com</span></p>
        </div>
        <div className = 'flex justify-end align-bottom w-full ps-7 lg:pe-7'>
            <p className = "maintext text-content text-white"> Zempoala, Hidalgo.</p>
        </div>
      </div>
    </div>
  )
}
