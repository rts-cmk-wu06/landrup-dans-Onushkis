import {useState, useEffect} from "react";
import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'


export const AppNavbar = () =>{
    // we are using the browser storage to save the user's data 
    // if the user has data stored in the browser then he is logged in, else the user is not logged in
    const [isUserLoggedin,setIsUserLoggedIn]=useState()

useEffect(() => {
    setIsUserLoggedIn(!!window.localStorage.getItem('user'))
}, [])

    return (
        <nav className="flex bg-white px-5 py-[10.5px] w-100 fixed w-screen items-center justify-between bottom-0 text-[24px] ">
            {/* think of the NavLink as a tag that behaves exactly like the normal anchor tag <a></a>*/}
<NavLink className={'p-[8px] border-[1px] rounded-full border-black ' }   to={DefaultRoutes. VelkommenPage} ><FiHome /></NavLink>
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={DefaultRoutes.SearchPage} ><AiOutlineSearch /></NavLink>
{/* when the user clicks on the calendar in the navbar ..  */}
{/* if he is loggedin  go to the calendar , else go to the login page*/}
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={isUserLoggedin ? DefaultRoutes.KalendarPage : DefaultRoutes.Login}><AiTwotoneCalendar /></NavLink>

          
          

        </nav>
    )
}