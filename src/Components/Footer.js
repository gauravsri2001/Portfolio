import React from 'react'
import {GrLinkedinOption, GrMail} from 'react-icons/gr'
import { FaGithub } from "react-icons/fa6";
import { BiPhone } from 'react-icons/bi';
const Footer = () => {
  return (
    <div>
        <div className='w-[screen] p-5 items-center justify-center bg-black  flex flex-row'>

            <div className=' flex flex-row p-2 mr-2 flex-wrap justify-around'>
                <a href='www.linkedin.com/in/gaurav-srivastava2001' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <GrLinkedinOption className="text-white"></GrLinkedinOption>
                    </div>
                </a>
            </div>

            <div className='flex flex-row p-2 mr-2 flex-wrap justify-around'>
                <a href='https://github.com/gauravsri2001' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        
                        <FaGithub className=" text-white" />
                    </div>
                </a>
            </div>

            

            <div className='flex flex-row p-2 mr-2 flex-wrap justify-around'>
                <a href='2001srigaurav@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <GrMail className="text-white"></GrMail>
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>2001srigaurav@gmail.com</span>
                </a>
            </div>

            <div className='flex flex-row p-2 mr-2 flex-wrap justify-around'>
                <a href='//' target='blank' className='text-lg flex flex-row text-violet-300'>
                    <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                        <BiPhone className='text-white ml-1 mt-[0.1rem]' />
                    </div>
                    <span className='text-white ml-1 mt-[0.1rem]'>8318533277</span>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Footer