import React from 'react'
import { BiColor } from 'react-icons/bi'

const AboutSkillCard = ({icon, text}) => {
  return (
    <div className = 'flex flex-col items-center justify-center rounded-xl relative h-24 w-24 bg-black/25 border-2 border-white/50 m-2 hover:border-white hover:scale-105 hover:animate-pulse'>
        <div className='m-1'>{icon}</div>
        <div className = 'text-white'>{text}</div>
    </div>
  )
}

export default AboutSkillCard
