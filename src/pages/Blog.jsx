import React from 'react'

export default function Blog() {
  const dummyData = [
    {
      id: 1,
      title: 'Blog Post 1',
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ex a nibh fermentum aliquam. Sed aliquam tortor ac malesuada ultricies. Quisque sodales diam vel ullamcorper fringilla.',
      image: 'https://example.com/image1.jpg',
    },
  ];

  return (
    <>
      <section className=''>
      <h1>welcome to my blog</h1>
      <div className=' flex max-w-5xl mx-auto  mt-10  '>
          <div className='flex-[4] border  '>
            <div className=' flex items-center  space-x-4  '>
              <div className=' w-96 border border-red-600 '>
                <img className=' object-cover object-center h-full w-full' src="https://images.pexels.com/photos/13713058/pexels-photo-13713058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              </div>
              <div className=' border '>
                <h1 className=''>By  <span>John Doe</span> <span>date</span> </h1>
                <h2 className=' text-xl '>Blog Post 1</h2>
                <p className='md:text-xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ex a nibh fermentum aliquam.</p>
              </div>
            </div>
        </div>
          
          <div className='flex-[1] hidden md:flex'>
            <h1>welcome to my blog</h1>
          </div>
      </div>
      
    </section>
    </>
  )
}
