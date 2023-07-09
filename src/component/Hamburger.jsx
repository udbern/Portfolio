import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Hamburger() {
    const navigate = useNavigate();
    const location = useLocation();

    function samePath (route){
        if ( route === location.pathname){
            return true
        }

    }
  return (
    <>
        <div className='relative'>
              <HiMenu className=' text-2xl  text-white  hover:border' />     
        </div>
          <div className=' hidden absolute bg-black right-0  top-14 w-[50%]  p-10  '>
              <ul className='block space-y-5  text-white text-xl font-serif mt-10  '>
                  <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500 hover:text-slate-400 ${samePath("/") && "text-white !border-b-slate-100 "}`} onClick={() => navigate("/")}>Home</li>
                  <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500 hover:text-slate-400 ${samePath("/Blog") && "text-white !border-b-slate-100"}`} onClick={() => navigate("/Blog")}>Blog</li>
                  <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent  transition-all duration-500hover:text-slate-400 ${samePath("/Project") && "text-white !border-b-slate-100"}`} onClick={() => navigate("/Project")} >Projects</li>
                  <li className={`cursor-pointer font-semi-bold  border-b-2 border-b-transparent transition-all duration-500   hover:text-slate-400  ${samePath("/Contact") && "text-white !border-b-slate-100  hover:border-b-slate-400"} `} onClick={() => navigate("/Contact")}>Contact</li>
              </ul>
              <ul className='text-white block space-y-5 mt-10'>
                    <Link>
                        <h1 className='text-white'>facebook</h1>
                    </Link>
                  
              </ul>
          </div>
    </>
  )
}
