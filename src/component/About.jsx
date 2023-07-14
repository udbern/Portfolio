import React, { useState, useEffect } from 'react'
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaSquareGithub } from 'react-icons/fa6';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';
import { client } from "../lib/client";
import Css from "../assest/img/Css.png";
import Html from "../assest/img/Html.png";
import Javascript from "../assest/img/Javascript.png";
import Reacts from "../assest/img/Reacts.png";
import Tailwind from "../assest/img/Tailwind.png";
import Sass from "../assest/img/Sass.png";
import { motion, animate, stagger } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function About() {
  const [authorData, setAuthorData] = useState(null);

  const handleButtonClick = () => {
    toast.info('Coming soon!');
  }

  useEffect(() => {
    client
      .fetch(`*[_type == "author"] {
        image {
          asset -> {
            _id,
            url
          }
        },
        bio
      }`)
      .then((data) => {
        setAuthorData(data[0]); 
      })
      .catch(console.error);
  }, []);



  return (
    <>
      <main className=' pt-10 md:pt-36  min-h-[100vh] dark:bg-gray-900 dark:text-gray-100 '>
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
                <Link to="https://wa.me/2349012675868">
                  < FaWhatsappSquare className='text-[#40C351]   bg-slate-200 overflow-hidden  hover:shadow-md hover:shadow-[#40C351] ' />
                </Link>
              </ul>
            </div> 
            <div className='h-96 w-96 flex max-w-4xl mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg shadow-gray-950 bg-gray-700 p-5 dark:shadow-gray-300 '>
              {authorData && (
                <img
                  className='object-center object-cover w-full h-full'
                  src={authorData.image.asset.url}
                  alt='Author Image'
                  loading="lazy"/>
              )}
            </div>
          </div>
          
          <div className='mx-5'>
            <motion.h1 className='text-center md:text-left font-serif'
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              
              {authorData && authorData.bio.map((block) => (
                <p key={block._key}>{block.children.map((child) => child.text).join('')}</p>
              ))}
            </motion.h1>
            <div>
              <button
                className="flex items-center gap-2 mt-3 justify-center max-w-4xl mx-auto md:mx-0 border py-2 px-3 bg-slate-700 text-white hover:bg-slate-800 transition-all duration-300 rounded-lg overflow-hidden"
                onClick={handleButtonClick}
              >
                Download CV <span><HiDownload /></span>
              </button>
              <ToastContainer
                position="top-center"
                closeOnClick
                theme="dark"

              />
            </div>
            
            <div className='mt-3    '>
              <h3 className='capitalize font-semi-bold text-2xl pb-2 text-center md:text-left '> my stack</h3>
              <div className='flex justify-center md:justify-start '>
                <motion.ul className='flex items-center space-x-4 text-3xl'
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}

                >
                  
                  <img className=' h-12 dark:border-gray-300  border-2 border-black  rounded overflow-hidden' src={Css} alt="" />
                  
                  <img className=' h-12 dark:border-gray-300 border-2 border-black  rounded overflow-hidden' src={Html} alt="" />
          
                  <img className=' h-12 dark:border-gray-300  border-2 border-black  rounded overflow-hidden' src={Javascript} alt="" />
                  
                  <img className=' h-12 dark:border-gray-300 border-2 border-black  rounded overflow-hidden' src={Reacts} alt="" />
  
                  <img className=' h-12 dark:border-gray-300 border-2 border-black  rounded overflow-hidden' src={Sass} alt="" />

                  <img className=' h-12 dark:border-gray-300  border-2 border-black  rounded overflow-hidden' src={Tailwind} alt="" />
                </motion.ul>
              </div>
              
            </div>
            
          </div>
      </div>
    </main>
    </>
  )
}
