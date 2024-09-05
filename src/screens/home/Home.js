import React from 'react'
import './HomeStyle.css'
import Rain from '../../components/rain/Rain'
import Bottom from '../../components/bottom/Bottom'
import ImgNext from '../../assets/images/png/ooui_next-ltr.png'
import { ButtonNext } from '../../components/buttonscustom/Buttons'

const Home = () => {
    const screenscale = 1000
    console.log(screenscale);
    return (
            <div className='flex min-h-screen flex-col z-10'>
                
                <div className='flex lg:flex-row flex-col grow'>
                    <div className='flex justify-center flex-col mi-h-full w-full my-36'>
                        <p className="TextStyleMain">Hola, soy <br></br> Alonso López Olguín</p>
                        <div className='flex border-b-2 border-opacity-45 border-lime-300 animate-pulse scale-60 lg:me-[35%] lg:ms-[10%] lg:scale-100 scale-75'></div>
                        <p className="TextStyleSub">Desarrollador c#</p>
                    </div>
                    <div className='flex lg:justify-center lg:items-center flex-col justify-end items-center flex-grow lg:w-[80px] lg:pt-[7%]'>
                        <ButtonNext imgSource={ImgNext}></ButtonNext>
                    </div>
                </div>
                <div className="bottom-0 inset-x-0">
                    <Bottom></Bottom>
                </div>
                <Rain></Rain>
            </div>
            
    )
}
export default Home