import React from 'react'
import './HomeStyle.css'
const Home = () => {
    return (
            <div className='flex  justify-center h-3/4 flex-col'>
                <p className="TextStyleMain">Hola, soy <br></br> Alonso López Olguín</p>
                <div className='flex border-b-2 border-lime-300 animate-pulse scale-75'>
                </div>
                <p className="TextStyleSub">Desarrollador c#</p>
            </div>
    )
}
export default Home