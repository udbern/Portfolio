import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai';
import { LuExternalLink } from 'react-icons/lu';

export default function Project() {
  return (
    <>
      <section>
        <h1 className='text-center  font-semibold text-3xl mt-10 '>My projects</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-5 mt-10 '>
          <div className='border rounded overflow-hidden  border-gray-800 shadow-lg shadow-slate-800'>
            <div className='  h-60 border border-red-600'>
              <img className='object-cover object-center h-full w-full' src="https://images.pexels.com/photos/13713058/pexels-photo-13713058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className=''>
              <h1 className='pb-3 pt-3 capitalize text-center'>ghjgjdsghdsgdsfd</h1>
              <div className='flex justify-between items-center px-10 pb-2  '>
                <Link className='flex space-x-2 items-center' to="">
                  <h2 className='capitalize '>github link</h2><span><AiFillGithub className='text-2xl'/></span>
                </Link>
                <Link className=' flex space-x-2 items-center' to="">
                  <h2 className='capitalize  '>live link</h2><span><LuExternalLink className='text-2xl'/></span>
                </Link>
              </div>

            </div>
          </div>
          

        </div>
      </section>
    </>
  )
}
