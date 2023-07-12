import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import logo from '../assest/img/logo.png'

import Hamburger from './Hamburger';


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function samePath(route){
    if (route === location.pathname ) {
      return true
    }
  }

  return (
    <header className=' flex items-center bg-gray-950  shadow-md  shadow-gray-950 sticky top-0 md:h-20 h-14 z-50'>
      <nav className='container mx-auto flex items-center justify-between px-10  '>
        <div className=''>
          <img className=' w-20 md:w-40 cursor-pointer ' onClick={() => navigate("/")} src={logo} alt="" />
        </div>
        <div className='block md:hidden '>
            <Hamburger/>
        </div>
        <div className=' hidden md:flex '>
          <ul className='flex space-x-5 text-white text-xl font-serif  '>
            <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500 hover:text-slate-400 ${samePath("/") && "text-white !border-b-slate-100 "}`} onClick={() => navigate("/")}>Home</li>
            <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500 hover:text-slate-400 ${samePath("/Blog") && "text-white !border-b-slate-100"}`} onClick={() => navigate("/Blog")}>Blog</li>
            <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500 hover:text-slate-400 ${samePath("/Project") && "text-white !border-b-slate-100"}`} onClick={() => navigate("/Project")} >Projects</li>
            <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent transition-all duration-500   hover:text-slate-400  ${samePath("/Contact") && "text-white !border-b-slate-100  hover:border-b-slate-400"} `} onClick={() => navigate("/Contact")}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
