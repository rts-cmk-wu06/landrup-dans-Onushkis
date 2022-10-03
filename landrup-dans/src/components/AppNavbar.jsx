import { DefaultRoutes } from "../Routes";
import { NavLink } from "react-router-dom";

export const AppNavbar = () =>{

    return (
        <nav className="flex">
<NavLink className={'px-2'} to={DefaultRoutes.HomePage} >Home</NavLink>
{/* <NavLink className={'px-2'}  to={DefaultRoutes.BlogPage} >Blog</NavLink> */}
        </nav>
    )
}