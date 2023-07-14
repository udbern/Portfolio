import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/client';

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
    <section className='px-5 min-h-[100vh] dark:bg-gray-900 dark:text-gray-100'>
      <h1 className='text-center pt-20 font-semibold text-3xl capitalize'>welcome to my blog</h1>
      <div className='flex max-w-6xl mx-auto pt-10'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
          {stories.map((story) => (
            <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
              <div className='border rounded overflow-hidden dark:border-gray-100 dark:shadow-gray-100 border-gray-800 md:h-[440px] shadow shadow-slate-800'>
                <div className='m-1 h-24 md:h-60'>
                  {story.mainImage && (
                    <img
                      className='object-cover object-center h-full w-full hover:scale-95 duration-300 rounded overflow-hidden'
                      src={story.mainImage.asset.url}
                      alt={story.mainImage.alt}
                      loading="lazy" />
                  )}
                </div>
                <div className='p-3 '>
                  <div className='flex items-end justify-between '> 
                    {story.author.image && (
                      <img
                        className=' w-7 h-7 md:w-10 md:h-10 rounded-full'
                        src={story.author.image.asset.url}
                        alt={story.author.image.alt}
                      />
                    )}
                    <span className='text-[15px] md:text-xl'>{new Date(story.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <h2 className='capitalize text-sm font-semibold pt-2 '>{story.title}</h2>
                  <p className='pt-1 text-[12px] md:text-xl font-normal'>{`${story.body[0].children[0].text.substring(0, 35)}...`}</p>
                  <Link to={`/blog/${story.slug.current}`}>
                    <h2 className=' mt-4 w-fit  text-[12px] md:text-xl border py-1 px-3 bg-slate-700 text-white hover:bg-slate-800  transition-all duration-300  rounded-lg   overflow-hidden '>Read More</h2>
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
