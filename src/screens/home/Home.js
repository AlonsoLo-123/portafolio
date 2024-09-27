import React from 'react'
import './HomeStyle.css'
import Rain from '../../components/rain/Rain'
import ImgNext from '../../assets/images/png/ooui_next-ltr.png'
import { ButtonNext } from '../../components/buttonsCustom/Buttons'
import { Link } from 'react-router-dom'
import BottomHome from '../../components/bottomHome/BottomHome'
import { motion } from "framer-motion"

const Home = () => {
    const screenscale = 1000
    console.log(screenscale);
    return (
            <div className='flex pt-20 h-screen flex-col z-10  backdrop-blur-lg'>
                <div className='flex flex-grow mb-10 lg:flex-row flex-col'>
                    <div className='flex justify-center flex-col h-full w-full'>
                        <div className='pl-[11%] overflow-hidden mb-[2%]'>
                            <motion.div initial={{ x:-300, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 1 }}>
                                <p className="HomeTextStyle Main">Hola, soy <br/> Alonso López Olguín</p>
                            </motion.div>
                        </div>
                        <div className='flex border-b-2 border-opacity-45 border-green-lime animate-pulse scale-60 lg:me-[35%] lg:ms-[10%] lg:scale-100 scale-75'/>
                        <div className='mt-[3%] pl-[10%] overflow-hidden'>
                            <motion.div initial={{ x:300, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 1 }}>
                                <p className="HomeTextStyle Sub">Desarrollador Web Frontend.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:justify-center lg:items-center justify-end items-center flex-grow lg:w-28 lg:pt-20 my-5'>
                        <Link to = "/projects"> <ButtonNext imgSource={ImgNext}/> </Link>
                    </div>
                </div>
                <div className="flex justify-end align-bottom">
                    <BottomHome/>
                </div>
                <Rain/>
            </div>
            
    )
}
export default Home