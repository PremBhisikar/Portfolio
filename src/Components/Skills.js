import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y})=>{
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold'
        
        whileHover={{scale: 1.05}}
        initial= {{x:0, y:0}}
        whileInView = {{x:x, y:y, transition: {duration:1.5} }}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

export const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full
     bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
     lg:bg-circularDarkLg lg:dark:bg-circularDarkLg
     md:bg-circularDarkMd md:dark:bg-circularDarkMd
     sm:bg-circularDarkSm sm:dark:bg-circularDarkSm
     '>
        
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light
        lg:p-6 md:p-4 xs:text-xs xs:p-2'
        
        whileHover={{scale: 1.05}}
        >
            Web
        </motion.div>
        <Skill name = "HTML" x="-18vw" y="-6vw"/>
        <Skill name = "BootStrap" x="11vw" y="-5vw"/>
        <Skill name = "CSS5" x="-5vw" y="-10vw"/>
        <Skill name = "ReactJs" x="-19vw" y="-15vw"/>
        <Skill name = "NextJs" x="9vw" y="-17vw"/>
        <Skill name = "Tailwindcss" x="19vw" y="-11vw"/>
        <Skill name = "NodeJs" x="19vw" y="10vw"/>
        <Skill name = "MongoDB" x="0vw" y="10vw"/>
        <Skill name = "ExpressJs" x="-18vw" y="6vw"/>
        <Skill name = "GitHub" x="-4vw" y="-21vw"/>
        <Skill name = "Javascript" x="-34vw" y="-6vw"/>
        <Skill name = "REST APIs" x="34vw" y="-6vw"/>
        <Skill name = "MySQL" x="-12vw" y="16vw"/>
        <Skill name = "CI/CD pipeline" x="34vw" y="6vw"/>

        
        




    </div>
    </>
  )
}
