import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/client';
import uduakabasi from '../uduak.png';

export default function Blog() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "post"] {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            },
            "name": ^[auth]._id,
            author-> {
              name,
              image {
                asset -> {
                  _id,
                  url
                },
                alt
              }
            }
          } | order(publishedAt desc)`
        );
        setStories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, []);

  return (
    <section className='mx-5 min-h-[100vh]'>
      <h1 className='text-center mt-20 font-semibold text-3xl capitalize'>welcome to my blog</h1>
      <div className='flex max-w-6xl mx-auto mt-10'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
          {stories.map((story) => (
            <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
              <div className='border rounded overflow-hidden border-gray-800 shadow-lg shadow-slate-800'>
                <div className='m-1'>
                  {story.mainImage && (
                    <img
                      className='object-cover object-center h-full w-full hover:scale-95 duration-300 rounded overflow-hidden'
                      src="https://images.pexels.com/photos/13713058/pexels-photo-13713058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt={story.mainImage.alt}
                    />
                  )}
                </div>
                <div className='p-2 '>
                  <div className='flex items-end space-x-2 '> 
                    {story.author.image && (
                      <img
                        className='w-10 h-10 rounded-full'
                        src={story.author.image.asset.url}
                        alt={story.author.image.alt}
                      />
                    )}
                    <h1 className='capitalize text-[10px] text-xl '>{story.author.name}  <span>{new Date(story.publishedAt).toLocaleDateString()}</span></h1>
                  </div>
                  
                  
                  <h2 className='capitalize text-sm font-semibold'>{story.title}</h2>
                  <p className='pb-1 text-[12px] md:text-xl font-normal'>{`${story.body[0].children[0].text.substring(0, 40)}...`}</p>
                  <Link to={`/blog/${story.slug.current}`}>
                    <h2 className=' w-fit  text-[12px] md:text-xl border py-2 px-3 bg-slate-950 text-white hover:bg-slate-800  transition-all duration-300  rounded-lg   overflow-hidden '>Read More</h2>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
