import React from 'react'
import Profile from '../assets/profile.png'
import { Styles } from '../utils/Style'
import Resume from '../assets/resume.pdf'

const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
        <div className='flex-1 py-4'>
            <span className={Styles.heroHeadText}>
                Hi, I'm <span className='text-orange-600'> Gaurav Srivastava
                </span>
                <br />

                <span className={Styles.heroSubText}>
                    I am a Front-End Developer & 
                    <br />
                    Data Analysis Enthusiast
                </span>

            </span>
            <br/>
            
        </div>

    </div>
  )
}

export default About