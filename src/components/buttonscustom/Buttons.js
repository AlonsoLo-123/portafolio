import React from 'react'
import './ButtonsStyle.css'
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import { BiColor } from 'react-icons/bi';

export const ButtonMenu = ({text}) => {
    return (
        <button className='w-[97px] mr-3 bg-transparent hover:bg-gradient-to-b from-[#999999]/50 via-transparent to-transparent focus:outline-none hover:mb-2'>
            <p className="TextBStyle">{text}</p>
        </button>
    )
}

export const ButtonBottom = ({imgSource,url}) => {
    return (
        <button onClick={() => {window.location.href = url}} className='w-[60px] h-[60px] rounded-full border-2 border-solid border-lime-300 border-opacity-75 mr-5 bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none'>
            <img src={imgSource} className="flex w-full h-full object-contain"/> 
        </button>
    )
}

export const ButtonNext = ({imgSource}) => {
    return (
        <button className='w-[60px] h-[60px] bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none rotate-90 lg:rotate-0 mb-[3%]'>
            <img src={imgSource} className="flex w-full h-full object-contain"/> 
        </button>
    )
}

export const ButtonGit = ({imgSource,text}) => {
    return (
        <button className='flex flex-row w-[115px] h-[50px] bg-transparent hover:bg-white/50 border-2 focus:outline-0 border-lime-300 justify-center px-[5%]'>
            <img src={imgSource} className="flex w-full h-full object-contain"/> 
            <p className='flex text-white justify-center TextBStyle'>{text}</p>
        </button>
    )
}

export const ButtonDemo = ({text}) => {
    return (
        <button className='flex flex-row w-[115px] h-[50px] bg-transparent hover:bg-white/50 border-2 focus:outline-0 border-lime-300 justify-center px-[5%]'>
            <IoCaretForwardCircleSharp className="flex w-full h-full object-contain" style={{color: 'white'}}/>
            <p className='flex text-white justify-center TextBStyle'>{text}</p>
        </button>
    )
}

