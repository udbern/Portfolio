import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { LuExternalLink } from 'react-icons/lu';
import { client } from "../lib/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}


export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        github,
        live
      }  `
      )
      .then((data) => {
        setProjectData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className='min-h-[100vh] pb-5 dark:bg-gray-900 dark:text-gray-100 '>
        <h1 className='text-center font-semibold text-3xl pt-10'>My projects</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-5 mt-10'>
          {projectData ? (
            projectData.map((project) => (
              <div key={project._id} className='border rounded overflow-hidden dark:shadow-gray-300 border-gray-800 shadow shadow-slate-800'>
                <div className='m-1 h-60 border-2 border-slate-700'>
                  <img
                    className='object-cover object-center h-full w-full hover:scale-95 duration-300 rounded overflow-hidden'
                    src={urlFor(project.mainImage.asset).url()}
                    alt={project.mainImage.alt}
                    loading="lazy"/>
                </div>
                <div className='px-5'>
                  <h1 className=' pt-2 capitalize font-semibold'>{project.title}</h1>
                  <div className='flex justify-between items-center pt-5 pb-2'>
                    <a className='flex space-x-1 items-center  bg-gray-700 text-white px-4 rounded py-1 hover:bg-slate-800' href={project.github}>
                      <h2 className='capitalize'>Github</h2><span><AiFillGithub className='text-2xl' /></span>
                    </a>
                    <a className='flex space-x-1 items-center bg-gray-700 text-white px-4 rounded py-1 hover:bg-slate-800' href={project.live}>
                      <h2 className='capitalize'>Live</h2><span><LuExternalLink className='text-2xl' /></span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='flex justify-center items-center'>
                <p className=' md:text-4xl'>Loading data...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
