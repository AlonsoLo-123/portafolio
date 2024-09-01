import React from 'react'
import './HeaderStyle.css'

const Header = () => {
  return (
    <div>
        <button className="ButtonStyle"> <p className="TextBStyle"> Inicio</p> </button>
        <button className="ButtonStyle"><p className="TextBStyle">Proyectos</p></button>
        <button className="ButtonStyle"><p className="TextBStyle">Sobre Mi</p></button>
    </div>
  )
}

export default Header