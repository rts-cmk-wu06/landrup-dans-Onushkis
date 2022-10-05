import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'

export const AppNavbar = () =>{

    return (
        <nav className="flex bg-white px-5 py-10 w-100 fixed w-screen items-center justify-between bottom-0">
            {/* think of the NavLink as a tag that behaves exactly like the normal anchor tag <a></a>*/}
<NavLink className={'px-2'} to={DefaultRoutes.HomePage} ><FiHome /></NavLink>
<NavLink className={'px-2'} to={DefaultRoutes.SearchPage} ><AiOutlineSearch /></NavLink>
<NavLink className={'px-2'} to={DefaultRoutes.HomePage} ><AiTwotoneCalendar /></NavLink>

          
          

        </nav>
    )
}