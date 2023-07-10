import React from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
   
   const dummy =[
     {
       "_id": "drafts.d2f251cd-3f58-4abb-9b91-287afdd9a49b",
       "_type": "pet",
       "name": "Jara",
       "_rev": "ky7gn7-579-sbh-pq8-q2qsxepxq",
       "_updatedAt": "2022-02-09T23:02:39.771Z"
     }
   ]

  return (
    <>
      <section className=' mx-5'>
      <h1 className='text-center  mt-20 font-semibold text-3xl capitalize'>welcome to my blog</h1>
      <div className=' flex max-w-6xl mx-auto  mt-10   '>
          <div className=' grid grid-cols-2 lg:grid-cols-3 gap-5    '>
            <div className=' border rounded overflow-hidden  border-gray-800 shadow-lg shadow-slate-800 '>
              <div className=' m-1 '>
                <img className=' object-cover object-center h-full w-full hover:scale-95 duration-300  rounded overflow-hidden ' src="https://images.pexels.com/photos/13713058/pexels-photo-13713058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              </div>
              <div className=' p-1 '>
                <h1 className=' capitalize '>By<span>John Doe</span> <span>date</span> </h1>
                <h2 className=' capitalize text-sm font-semibold'>title</h2>
                <p className='md:text-xl font-normal '>Lorem ipsum dolor sit amet,.</p>
                  <Link>
                  <h2>Read More</h2>
                  </Link>
              </div>
            </div>
            
            
        </div>
      </div>
    </section>
    </>
  )
}
