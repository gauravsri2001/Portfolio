import React from 'react'
import Tilt from 'react-parallax-tilt'
import {Styles} from '../utils/Style'
import { technologies, services } from '../Constants'
//import {motion} from "framer-motion"
import './style.css'

const OverView = () => {
  return (
    <div>
        <div className='flex-row items-center pl-5 justify-center pt-3' id='Overview'>
            <span className= {Styles.sectionHeadText}>
                Introduction
            </span>
            <hr className='w-[35]'></hr>

            <div className= {Styles.sectionText}>
            Hello! I'm Gaurav Srivastava, a 22-year-old Software Developer enthusiast from Uttar Pradesh, India. Currently pursuing a B.Tech degree in Computer Science at VIT Bhopal, I'm eager to step into the world of software development.
            Proficient in Java, React.js, and MySQL, I love turning ideas into functional solutions. When not coding, I enjoy cricket and volleyball for a balanced lifestyle.
            Excited about exploring opportunities in software development, I'm ready to contribute, learn, and make a meaningful impact. Let's work together and bring ideas to Life!
            </div>

        </div>

        <div className='flex flex-wrap justify-center'>
            {
                services.map((service) => (
                    <div> 
                        <Tilt key={service.icon}
                            className = "parallax-effect-glare-scale"
                            perspective={500}
                            glareColor="fed7aa"
                            glareEnable = {true}
                            glareMaxOpacity = {0.50}
                            sale = {1.02}
                            gyroscope = {true}>
                                <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                                    <img className='h-[100px] w-[100px]' src = {service.icon} alt={service.title} />
                                    <div className='m-5 text-violet-500'>
                                        {service.title}
                                    </div>
                                </div>
                            
                        </Tilt>
                    </div>

                ))
            }

        </div>

        <div className='flex flex-wrap justify-center items-center'>
            {technologies.map((technology)=>(
                <div
                key={technology.name}
                className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 hover:shadow-orange-300'
                >
                    <img className='p-2' src={technology.icon} alt={technology.name} />
                    <div className='text-violet-600 justify-center flex'>
                        {technology.name}
                    </div>

                </div>
            ))}

        </div>
    </div>
  )
}

export default OverView