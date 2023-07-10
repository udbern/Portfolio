import React, {useState} from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';



export default function Hamburger() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen =() => {
        setIsMenuOpen(true);
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    function samePath (route){
        if ( route === location.pathname){
            return true
        }

    }
  return (
    <>
        <div className='relative'>
              <HiMenu className=' text-2xl  text-white  hover:border' onClick={handleMenuOpen} />     
        </div>
          {isMenuOpen && <div className='  absolute bg-black right-0  top-0 w-[70%]  h-screen  p-10  '>
              <AiOutlineClose className=' text-2xl  text-white  hover:border' onClick={handleMenuClose} /> 
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
          </div>}
    </>
  )
}
