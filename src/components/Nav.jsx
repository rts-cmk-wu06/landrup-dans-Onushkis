import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'


export const Nav = () =>{

    return (
        <div className="p-8 h-[66px] items-center"> 
        <nav className="flex justify-between items-center  text-[41px] ">

             
          <FiHome />
          <AiOutlineSearch />
          <AiTwotoneCalendar />


        </nav>
        </div>
    )
}