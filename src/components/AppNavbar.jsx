import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'

export const AppNavbar = () =>{

    return (
        <nav className="flex bg-white px-5 py-[10.5px] w-100 fixed w-screen items-center justify-between bottom-0 text-[24px] ">
            {/* think of the NavLink as a tag that behaves exactly like the normal anchor tag <a></a>*/}
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' }  to={DefaultRoutes.HomePage} ><FiHome /></NavLink>
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={DefaultRoutes.SearchPage} ><AiOutlineSearch /></NavLink>
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={DefaultRoutes.HomePage} ><AiTwotoneCalendar /></NavLink>

          
          

        </nav>
    )
}