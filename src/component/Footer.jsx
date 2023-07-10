import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaSquareGithub } from 'react-icons/fa6';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';
import uduak from '../uduak.png'

export default function Footer() {
  return (
    <>
<<<<<<< HEAD
      <footer className='  bg-slate-950  w-full mt-5 px-5   '>
=======
      <footer className=' bg-slate-950  w-full mt-5 px-5   '>
>>>>>>> 7135f6547e60269de1564d78e84b138f13e445f7
        <div className='flex  max-w-6xl mx-auto   items-center justify-between  md:h-20    '>
        <div>
          <img className='w-10' src={uduak} alt="footer.png" />
        </div>
        <div className=' hidden md:flex '>
            <h2 className='text-white '>@copyrightuduakabasibernardedwin</h2>
        </div>
        <div>
            <ul className='flex items-center space-x-4 text-2xl '>
              <Link to="https://www.facebook.com/udbern1">
                <AiFillFacebook className='text-[#039BE5]' />
              </Link>
              <Link to="https://twitter.com/EdwinUduakabasi">
                <AiFillTwitterSquare className=' text-[#03A9F4]' />
              </Link>
              <Link to="https://github.com/udbern">
                < FaSquareGithub className=' text-[#333]' />
              </Link>
              <Link to="">
                < FaSquareInstagram className='text-[#D81B60]' />
              </Link >
              <Link to="https://api.whatsapp.com/send?phone=55+2349012675989&text=Hello" >
                < FaWhatsappSquare className='text-[#40C351]' />
              </Link>
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}
