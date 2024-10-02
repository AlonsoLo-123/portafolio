import React from 'react'
import { motion } from 'framer-motion'

const AboutSkillCard = ({icon, text, variants}) => {
  return (
    <motion.div variants={variants} whileHover={{ scale: 1.05 }}  
    className='flex flex-col items-center justify-center rounded-xl relative h-24 w-24 border-2 border-white/50 m-2 hover:border-white hover:animate-pulse shadow-md shadow-white/75'
    >
        <div className='m-1'>{icon}</div>
        <div className='text-white'>{text}</div>
    </motion.div>
  )
}

export default AboutSkillCard
