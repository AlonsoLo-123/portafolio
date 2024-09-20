import React from 'react'
import '../about/About.css'
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import Photo from '../../assets/images/jpg/fotografia.jpg'

export default function About() {
  return (
    <div className='flex pt-20 min-h-screen flex-col'>
      <div className = 'px-10 py-10 lg:px-96 border-b-2 border-white/50'>
        <p className = "AboutTextStyle Title pb-4">Resumen Profesional</p>
        <p className = "AboutTextStyle Content">
            Soy un desarrollador de software con experiencia en la creación y mantenimiento de proyectos utilizando C#, Java y principios de Programación Orientada a Objetos. Tengo un fuerte compromiso con la mejora continua, adoptando las mejores prácticas de desarrollo para garantizar soluciones robustas y escalables que satisfagan las necesidades del cliente.
        </p>
      </div>
      <div className='flex flex-col lg:flex-row flex-grow'>
        <div className='max-h-full max-w-full m-auto'>
            <img src={Photo} className='rounded-full flex object-contain scale-75'></img>
        </div>
        <div className='border-s-2 border-white/50 scale-75'></div>
        <div className = 'px-10 py-7 lg:px-10 w-full h-full'>
            <div className = 'flex flex-row'>
                <div className = "AboutTextStyle Content w-full">
                <p className = "AboutTextStyle Title pb-7">Experiencia Laboral</p>
                    <div className = 'flex flex-row'>
                        <VscDebugBreakpointLogUnverified className='flex items-center object-contain m-1'></VscDebugBreakpointLogUnverified>
                        Toshiba Global Commerce Solutions
                    </div>
                    <div className='px-10 mb-5'>
                        Junio 2023–Septiembre 2023
                        <br></br>Soporte técnico a equipo comercial
                        <br></br>Service representative I
                    </div>
                    <div className = 'flex flex-row'>
                            <VscDebugBreakpointLogUnverified className='flex items-center object-contain m-1'></VscDebugBreakpointLogUnverified>
                            CodeJar
                        </div>
                    <div className='px-10 mb-5'>
                        Septiembre 2020–Enero 2021
                        <br></br>Desarrollador Frontend-Backend
                        <br></br>Desarrollo de App
                    </div>
                    <div className = 'flex flex-row'>
                            <VscDebugBreakpointLogUnverified className='flex items-center object-contain m-1'></VscDebugBreakpointLogUnverified>
                            Centro de Extensión Universitaria / Difusión Cultural
                    </div>
                    <div className='px-10 mb-5'>
                        Agosto 2019–Junio 2020
                        <br></br>Practicante
                    </div>  
                </div>
                <div className = 'flex w-full flex-col justify-end align-bottom'>
                    <p className = "AboutTextStyle SubTitle">Lenguajes y habilidades:</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className = 'flex border-t-2 border-white/50 justify-end align-bottom py-3 flex-col'>
        <div className = 'flex w-full flex-col AboutTextStyle SubTitle items-center'>
            <p className = "AboutTextStyle Title"> Datos de contacto:</p>
            <div className = 'flex flex-row'>
                <p>Teléfono:</p>
                <p className = 'text-green-lime ps-1'>7721327875</p>
            </div>
            <div className = 'flex flex-row'>
                <p> Correo:</p>
                <p className = 'text-green-lime ps-1'>outbreakalonzo@gmail.com</p>
            </div>
        </div>
        <div className = 'flex justify-end align-bottom w-full pe-7'>
            <p className = "AboutTextStyle Content"> Fraccionamiento Bartolino recidencial. Calle San colombano Zempoala, Hgo.</p>
        </div>
      </div>
    </div>
  )
}
