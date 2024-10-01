import React from 'react'
import './ButtonsStyle.css'
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';



export const ButtonMenu = ({text, path}) => {
    const location = useLocation();
    return (
        <button className={`w-[97px] h-full mx-1 pt-2 bg-transparent focus:outline-none hover:pb-2 group ${location.pathname === path ? 
            'bg-gradient-to-b from-[#999999]/25 via-transparent to-transparent':
            'hover:bg-gradient-to-b from-[#999999]/25 via-transparent to-transparent'}`}>
            <p className="TextBStyle">{text}</p>
            <div className={`border-t-2 mt-2 scale-75 ${location.pathname === path ? 
                'pb-2 border-white' : 
                'border-transparent group-hover:border-white/75 animate-pulse'}`}/>
        </button>
    )
}

export const ButtonBottom = ({icon, url}) => {
    return (
        <button onClick={() => {window.location.href = url}} className='w-[60px] h-[60px] rounded-full border-2 border-solid border-green-lime border-opacity-75 mx-2 bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none'>
            {icon}
        </button>
    )
}

export const ButtonNext = ({imgSource}) => {
    return (
        <button className='w-[60px] h-[60px] bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none rotate-90 lg:rotate-0 mb-[7%] animate-pulse'>
            <img src={imgSource} className="flex w-full h-full object-contain"/> 
        </button>
    )
}

export const ButtonGit = ({imgSource, text, url}) => {
    return (
        <button onClick={() => {window.location.href = url}} className='flex flex-row w-[110px] h-[50px] bg-transparent hover:bg-white/50 border-2 focus:outline-0 border-yellow-lime justify-center px-[5%]'>
            <img src={imgSource} className="flex w-full h-full object-contain"/> 
            <p className='flex text-white justify-center TextBStyle'>{text}</p>
        </button>
    )
}

export const ButtonDemo = ({text, url}) => {
    return (
        <button onClick={() => {window.location.href = url}} className='flex flex-row w-[110px] h-[50px] bg-transparent hover:bg-white/50 border-2 focus:outline-0 border-green-lime justify-center px-[5%]'>
            <IoCaretForwardCircleSharp className="flex w-full h-full object-contain" style={{color: 'white'}}/>
            <p className='flex text-white justify-center TextBStyle'>{text}</p>
        </button>
    )
}

