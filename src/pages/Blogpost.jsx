import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../lib/client";
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    mainImage: props => (
      <figure>
        <img src={urlFor(props.node.asset).idth(200).url()} alt={props.node.alt} />
      </figure>
    )
  }
}

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
      <section className="dark:bg-gray-900 dark:text-gray-100">
        {blogpost && (
          <div className="py-20 px-5 max-w-3xl mx-auto">
            {blogpost.mainImage && (
              <img
                src={urlFor(blogpost.mainImage.asset).url()}
                alt={blogpost.mainImage.alt}
                className="md:h-96 h-40  w-full object-cover rounded-2xl shadow"
                loading="lazy"
              />
            )}
            <h1 className="text-2xl my-4 lg:text-4xl font-bold">{blogpost.title}</h1>
            <p className="font-bold text-sm mb-8">
              By {blogpost.name}{" "}
              <span className="text-[15px] md:text-xl">{new Date(blogpost.publishedAt).toLocaleDateString()}</span>
            </p>
            <div className="text-justify text-sm md:text-xl font-gray-800 max-w-3xl mx-auto">
              
              <PortableText value={blogpost.body} serializers={serializers} />
            </div>

            <div className="max-w-7xl mx-auto px-5 mb-20 mt-10 flex items-end justify-end">
              <Link
                to="/blog"
                className="bg-slate-700 text-white hover:bg-slate-800 py-2 px-4 rounded-lg overflow-hidden tracking-wide hover:opacity-75 transition-all duration-200"
              >
                Read More Blog posts
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
