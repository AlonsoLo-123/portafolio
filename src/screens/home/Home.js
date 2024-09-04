import React from 'react'
import './HomeStyle.css'
import Rain from '../../components/rain/Rain'
import Bottom from '../../components/bottom/Bottom'

const Home = () => {
    const screenscale = 1000
    console.log(screenscale);
    return (
            <div className='flex flex-col min-h-full'>
                <div className='justify-center h-full w-full my-36'>
                    <p className="TextStyleMain">Hola, soy <br></br> Alonso López Olguín</p>
                    <div className='flex border-b-2 border-opacity-45 border-lime-300 animate-pulse scale-60 lg:me-[35%] lg:ms-[10%] lg:scale-100 scale-75'></div>
                    <p className="TextStyleSub">Desarrollador c#</p>
                </div>
                <Rain></Rain>
                <Bottom></Bottom>
            </div>
            
    )
}
export default Home