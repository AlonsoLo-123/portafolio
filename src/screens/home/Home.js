import React from 'react'
/* import Rain from '../../components/rain/Rain' */
import { ButtonNext } from '../../components/buttonsCustom/Buttons'
import { Link } from 'react-router-dom'
import BottomHome from '../../components/bottomHome/BottomHome'
import { motion } from "framer-motion"
import { GrNext } from "react-icons/gr";


const Home = () => {
    const screenscale = 1000
    console.log(screenscale);
    return (
            <div className='flex pt-20 h-screen flex-col z-10'>
                <div className='flex flex-grow mb-10 lg:flex-row flex-col'>
                    <div className='flex justify-center flex-col h-full w-full'>
                        <div className='px-[10%] max-w-max overflow-hidden mb-[10%] lg:mb-[2%]'>
                            <motion.div initial={{ x:-300, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 1 }}>
                                <p className="text-black-lime font-bold font-serifmain text-mainsm lg:text-mainbig">Hola, soy <br/> Alonso López Olguín</p>
                            </motion.div>
                        </div>
                        <div className='flex border-b-2 border-opacity-45 border-green-lime animate-pulse scale-60 lg:me-[35%] lg:ms-[10%] lg:scale-100 scale-75'/>
                        <div className='mt-[10%] items-center lg:mt-[3%] px-[10%] overflow-hidden lg:max-w-max'>
                            <motion.div initial={{ x:300, opacity:0 }} animate={{ x:0, opacity:1}} transition={{ ease: "easeInOut", duration: 1}} whileHover={{ opacity:[0.5,1] }} className=' bg-black/50 p-2 rounded-md'>
                                <p className="text-green-lime font-bold font-serifmain text-sub lg:text-subbig">Desarrollador Web Front-End.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:justify-center lg:items-center justify-end items-center flex-grow lg:w-28 lg:pt-20 my-5'>
                        <Link to = "/projects"> <ButtonNext icon = {<GrNext className='h-full w-full' color='#8eb54b'/>}/> </Link>
                    </div>
                </div>
                <div className="flex justify-end align-bottom">
                    <BottomHome/>
                </div>
               {/*  <Rain/> */}
            </div>
            
    )
}
export default Home