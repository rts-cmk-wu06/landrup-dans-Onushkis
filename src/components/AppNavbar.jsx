import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { useNavigate ,useLocation} from 'react-router-dom'


export const AppNavbar = () =>{


    const navigate = useNavigate()

  const search = useLocation().search;
  const page = new URLSearchParams(search).get("page");
  
const navigateToLastPageIfAny = () => {
  if(!page) navigate('popularClasses')
  navigate(page)
}
    return (
        <nav className="flex bg-white px-5 py-[10.5px] w-100 fixed w-screen items-center justify-between bottom-0 text-[24px] ">
            {/* think of the NavLink as a tag that behaves exactly like the normal anchor tag <a></a>*/}
<NavLink className={'p-[8px] border-[1px] rounded-full border-black ' }   to={DefaultRoutes. VelkommenPage} ><FiHome /></NavLink>
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={DefaultRoutes.SearchPage} ><AiOutlineSearch /></NavLink>
<NavLink className={'p-[8px] border-[1px] rounded-full border-black' } to={DefaultRoutes.KalendarPage} ><AiTwotoneCalendar /></NavLink>

          
          

        </nav>
    )
}