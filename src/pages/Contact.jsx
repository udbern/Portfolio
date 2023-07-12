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
    <div>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-24">
        <div className="mb-4">
          <label className="text-gray-800 block mb-1" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800 block mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800 block mb-1" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            className="border border-gray-300 px-3 py-2 rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

