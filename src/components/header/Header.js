import React from 'react'
import './HeaderStyle.css'
import {ButtonMenu} from '../buttonscustom/Buttons'

const Header = () => {
  return (
      <div className='flex flex-row justify-end w-[100%] h-20 bg-[#000000bf] border-b-2 border-lime-300 border-opacity-50 pe-10'>
        <ButtonMenu text = "Inicio"></ButtonMenu>
        <ButtonMenu text = "Proyectos"></ButtonMenu>
        <ButtonMenu text = "Sobre mí"></ButtonMenu>
      </div>
  )
}
export default Header