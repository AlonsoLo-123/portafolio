import React from 'react'
import { ButtonNav } from '../buttonsCustom/Buttons'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
      <nav className='flex fixed flex-row justify-end w-full h-20 bg-white/10 border-b-2 border-white border-opacity-30 pe-10 z-20 backdrop-blur-3xl backdrop-opacity-75 hover:backdrop-opacity-100'>
        <Link to = "/portafolio"> <ButtonNav text = "Inicio" path = "/portafolio"/> </Link>
        <Link to = "/projects"> <ButtonNav text = "Proyectos" path = "/projects"/> </Link>
        <Link to = "/about"> <ButtonNav text = "Sobre mí" path = "/about"/> </Link>        
      </nav>
  )
}
export default Header