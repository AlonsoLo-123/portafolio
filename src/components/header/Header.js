import React from 'react'
import './HeaderStyle.css'
import ButtonMenu from '../buttonscustom/Buttons'

const Header = () => {
  return (
      <div className='flex flex-row justify-end w-[100%] h-[8%] bg-[#000000bf]'>
        <ButtonMenu text = "Inicio"></ButtonMenu>
        <ButtonMenu text = "Proyectos"></ButtonMenu>
        <ButtonMenu text = "Sobre mí"></ButtonMenu>
      </div>
  )
}

export default Header