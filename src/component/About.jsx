import React from 'react'
import  Uduakabasi   from '../assest/img/me.png'
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaSquareGithub } from 'react-icons/fa6';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { BiLogoSass } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { LiaReact } from 'react-icons/lia';



export default function About() {
  return (
    <>
    <main className=' mt-10 md:mt-28 '>
        <div className='max-w-4xl   mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 '>
          <div className=' flex gap-0 '>
            <div className=' hidden md:flex ml-4 md:ml-0 md:mr-4  h-full    '>
              <ul className='block space-y-10  h-full  text-xl md:text-3xl  '>
                <Link className='' to="https://www.facebook.com/udbern1">
                  <AiFillFacebook className='text-[#039BE5] bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#039BE5] mb-2 ' />
                </Link>
                <Link to="https://twitter.com/EdwinUduakabasi">
                  <AiFillTwitterSquare className=' text-[#03A9F4] mb-2   bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#03A9F4]' />
                </Link>
                <Link to="https://github.com/udbern">
                  < FaSquareGithub className=' text-[#333] mb-2  bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#333]' />
                </Link>
                <Link to="">
                  < FaSquareInstagram className='text-[#D81B60]  mb-2  bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#D81B60] ' />
                </Link>
                <Link to="https://api.whatsapp.com/send?phone=55+2349012675989&text=Hello">
                  < FaWhatsappSquare className='text-[#40C351]   bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#40C351] ' />
                </Link>
              </ul>
            </div> 
            <div className='h-96 w-96 flex max-w-4xl mx-auto  md:mx-0 rounded-lg overflow-hidden shadow-lg shadow-gray-950   '>
              <img className='object-center object-cover  w-full h-full ' src={Uduakabasi} alt="Uduakabsi.png" />

            </div>
          </div>
          
          <div className='mx-5'>
            <h1 className=' text-center  md:text-left font-serif  '>
               My name is UduakAbasi Bernard Edwin, A Front-End Developer/Designer with a proven ability to deliver on any given task and to collaborate effectively with other developers. I enjoy working closely with team members to ensure workloads are effectively redirected, and I pick up the slack when necessary with a passion for personal growth and software development. 
            </h1>
            <button className='flex items-center gap-2 mt-3 justify-center  max-w-4xl mx-auto md:mx-0  border  py-2 px-3 bg-slate-950 text-white hover:bg-slate-800  transition-all duration-300  rounded-lg   overflow-hidden '>Download CV <span><HiDownload/></span></button>
            
            <div className='mt-3 md:block  hidden   '>
              <h3 className='capitalize font-semi-bold text-2xl pb-2 text-center md:text-left '> my stack</h3>
              <div className='flex justify-center md:justify-start '>
                <ul className='flex items-center space-x-4 text-3xl '>
                  
                  <AiFillHtml5 className='text-[#E65100] border-2 border-black  bg-gray-200 rounded overflow-hidden' />
                  
                  <IoLogoCss3 className=' text-[#0277BD] border-2 bg-gray-200 border-black rounded overflow-hidden' />
          
                  < BiLogoSass className=' text-[#F06292] border-2 bg-gray-200 border-black rounded overflow-hidden ' />
                  
                  < SiTailwindcss className='text-[#00ACC1] bg-gray-200 border-2 border-black rounded overflow-hidden' />
  
                  < RiJavascriptFill className='text-[#c46c08fd] bg-gray-200 border-2 border-black rounded overflow-hidden' />

                  < LiaReact className='text-[#80DEEA] border-2 bg-gray-200 border-black rounded overflow-hidden ' />
                </ul>
              </div>
              
            </div>
            
          </div>
      </div>
    </main>
    </>
  )
}
