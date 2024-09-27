import React from 'react'
import { BiColor } from 'react-icons/bi'
import { motion } from 'framer-motion'

const AboutSkillCard = ({icon, text, variants}) => {
  return (
    <motion.div variants={variants} className = 'flex flex-col items-center justify-center rounded-xl relative h-24 w-24 bg-black/25 border-2 border-white/50 m-2 hover:border-white hover:scale-105 hover:animate-pulse'>
        <div className='m-1'>{icon}</div>
        <div className = 'text-white'>{text}</div>
    </motion.div>
  )
}

export default AboutSkillCard
