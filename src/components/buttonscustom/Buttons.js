import React from 'react'
import { useLocation } from 'react-router-dom';


export const ButtonNav = ({text, path}) => {
    const location = useLocation();
    return (
        <button className={`w-[97px] h-full mx-1 pt-2 bg-transparent focus:outline-none hover:pb-2 group ${location.pathname === path ? 
            'bg-transparent':
            'hover:bg-transparent'}`}>
            <p className="maintext-center text-black text-content">{text}</p>
            <div className={`border-t-2 mt-2 scale-75 ${location.pathname === path ? 
                'pb-2 border-acua-lime' : 
                'border-transparent group-hover:border-white/75 animate-pulse'}`}/>
        </button>
    )
}

export const ButtonBottom = ({icon, url, text, color}) => {
    return (
        <button onClick={() => {window.location.href = url}} className={`flex relative group w-[60px] h-[60px] rounded-full border-2 border-solid ${color} border-opacity-75 mx-2 bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none duration-200`}>
            <span
                class="maintext-center absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-[90px] bg-transparent border-2 border-black/50 text-white text-center text-sm rounded-md py-2 opacity-0 group-hover:opacity-100 transition-transform scale-x-0 group-hover:scale-x-100 duration-300">
                {text}
            </span>
            
            {icon}
        </button>
    )
}

export const ButtonNext = ({icon}) => {
    return (
        <button className='w-[60px] h-[60px] bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none rotate-90 lg:rotate-0 mb-[7%] animate-pulse'>
            {icon} 
        </button>
    )
}


export const ButtonProjectCard = ({icon, text, url, color}) => {
    return (
        <button onClick={() => {window.location.href = url}} className={`flex flex-row w-[100px] h-[50px] bg-transparent hover:bg-white/50 border-2 focus:outline-0 ${color} justify-center px-[5%] group`}>
            <div className='group-hover:scale-125 duration-300 h-full w-full'>{icon}</div>
            <p className='mx-1 m-auto text-white justify-center items-center maintext-center'>{text}</p>
        </button>
    )
}

