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
    <main className=' mt-10 md:mt-40 '>
        <div className='max-w-4xl   mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 '>
          <div className='h-96 w-96 flex max-w-4xl mx-auto  md:mx-0 rounded-lg overflow-hidden shadow-lg shadow-gray-950  '>
            <img className='object-center object-cover  w-full h-full ' src={Uduakabasi} alt="Uduakabsi.png" /> 
          </div>
          <div className='mx-5'>
            <h1 className=' text-center  md:text-left font-serif  '>
               My name is UduakAbasi Bernard Edwin, A Front-End Developer/Designer with a proven ability to deliver on any given task and to collaborate effectively with other developers. I enjoy working closely with team members to ensure workloads are effectively redirected, and I pick up the slack when necessary with a passion for personal growth and software development. 
            </h1>
            <button className='flex items-center gap-2 mt-3 justify-center  max-w-4xl mx-auto md:mx-0  border  py-2 px-3 bg-slate-950 text-white hover:bg-slate-800  transition-all duration-300  rounded-lg   overflow-hidden '>Download CV <span><HiDownload/></span></button>
            <div className='pt-3 flex justify-center md:justify-start'>
              <ul className='flex items-center space-x-4 text-2xl '>
                <Link>
                  <AiFillFacebook className='text-[#4267B2]' />
                </Link>
                <Link>
                  <AiFillTwitterSquare className=' text-[#1DA1F2]' />
                </Link>
                <Link>
                  < FaSquareGithub className=' text-[#333]' />
                </Link>
                <Link>
                  < FaSquareInstagram className='text-[#833AB4]' />
                </Link>
                <Link>
                  < FaWhatsappSquare className='text-[#128C7E]' />
                </Link>
              </ul>
            </div>
            <div className='mt-3 block   '>
              <h3 className='capitalize font-semi-bold text-2xl pb-2 text-center md:text-left '> my stack</h3>
              <div className='flex justify-center md:justify-start '>
                <ul className='flex items-center space-x-4 text-2xl '>
                  
                  <AiFillHtml5 className='text-[#E65100] bg-slate-950 rounded overflow-hidden' />
                  
                  <IoLogoCss3 className=' text-[#0277BD] bg-slate-950 rounded overflow-hidden' />
          
                  < BiLogoSass className=' text-[#F06292] bg-slate-950 rounded overflow-hidden ' />
                  
                  < SiTailwindcss className='text-[#00ACC1] bg-slate-950 rounded overflow-hidden' />
  
                  < RiJavascriptFill className='text-[#ffd500fd] bg-slate-950 rounded overflow-hidden' />

                  < LiaReact className='text-[#80DEEA] bg-slate-950 rounded overflow-hidden ' />
                </ul>
              </div>
              
            </div>
            
          </div>
      </div>
    </main>
    </>
  )
}
