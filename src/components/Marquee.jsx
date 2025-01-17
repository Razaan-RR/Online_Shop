import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[15vw] leading-none space-grotesk-regular uppercase -mt-10 pt-10 font-semibold pr-10'>We are an Art Store</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[15vw] leading-none space-grotesk-regular uppercase -mt-10 pt-10 font-semibold pr-10'>We are an Art Store</motion.h1>
        </div>
    </div>
  )
}

export default Marquee

