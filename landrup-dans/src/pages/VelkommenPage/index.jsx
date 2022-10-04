import React from 'react'
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import welcome from "../../assets/welcome.jpg"
import { NavLink , useParams} from "react-router-dom";




export const VelkommenPage = ()=>{
    const navigate= useNavigate()
    return (
        <>
       <main className='relative h-screen flex items-center justify-center'>
       <img src={welcome} alt=""  className='object-cover h-screen ' />

       <button className='absolute bottom-5 w-[249px] p-4 class="block  
       text-[24px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none focus:border-blue-500  
        rounded-full   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] 
        focus:outline-none focus:ring focus:ring-[#9771f3]"' 
        onClick={()=>navigate(`${DefaultRoutes.AktiviteterPage}`)
}>Kom i gang

</button>
       </main>
        </>
    )
}