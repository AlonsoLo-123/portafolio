import React from 'react'
import './HeaderStyle.css'
import {ButtonMenu} from '../buttonsCustom/Buttons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className='flex fixed flex-row justify-end  w-full h-20 bg-[#000000bf] border-b-2 border-green-lime border-opacity-50 pe-10 z-20'>
        <Link to = "/portafolio"> <ButtonMenu text = "Inicio" path = "/portafolio"/> </Link>
        <Link to = "/projects"> <ButtonMenu text = "Proyectos" path = "/projects"/> </Link>
        <Link to = "/about"> <ButtonMenu text = "Sobre mí" path = "/about"/> </Link>        
      </nav>
  )
}
export default Header