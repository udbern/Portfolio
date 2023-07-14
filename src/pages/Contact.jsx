import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c6dbqsc', 'template_oujchot', form.current, 'Vu6KfY0p_j_IIisjA')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='px-4 min-h-[100vh] dark:bg-gray-900  '>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto pt-24 dark:text-gray-100">
        <div className="mb-4">
          <label className="text-gray-800 block mb-1 dark:text-gray-100 " htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="border border-gray-700 dark:text-gray-100 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800 block mb-1 dark:text-gray-100" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="border border-gray-700 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800 block mb-1 dark:text-gray-100 " htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            required
            className="border border-gray-700 px-3 py-2 rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-100  dark:hover:bg-gray-950"
        >
          Send
        </button>
      </form>
      <ToastContainer
        position="top-center"
        theme="dark"
      />
    </div>
  )
}

