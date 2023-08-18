import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { PortableText } from '@portabletext/react'

export default function Blogpost() {
  const [blogpost, setBlogpost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlogpost = async () => {
      try {
        const data = await client.fetch(
          `*[slug.current == "${slug}"] {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
              asset -> {
                _id,
                url,
              },
              alt
            },
            "name": author -> name
          }`
        );
        if (data.length > 0) {
          setBlogpost(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogpost();
  }, [slug]);

  useEffect(() => {
    if (blogpost) {
      document.title = `Reading | ${blogpost.title}`;
    }
  }, [blogpost]);

  return (
    <>
      {blogpost && (
        <section className="py-20 px-5 max-w-3xl mx-auto">
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              className=" md:h-96 w-full object-cover rounded-2xl shadow"
              loading="lazy"/>
          )}
          <h1 className="text-2xl my-4 lg:text-4xl font-bold">{blogpost.title}</h1>
          <div className=" text-justify text-xl md:text-2xl  font-gray-800 max-w-3xl mx-auto border border-red-500 overflow-hidden block ">
            <PortableText value={blogpost.body} />
          </div>
          
          <div className="max-w-7xl mx-auto px-5 mb-20 mt-10 flex items-end justify-end">
            <Link
              to="/blog"
              className=" bg-slate-700 text-white hover:bg-slate-800  py-2 px-4  rounded-lg   overflow-hidden tracking-wide hover:opacity-75 transition-all duration-200"
            >
              Read More Blog posts
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
