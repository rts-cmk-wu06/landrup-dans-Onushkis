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
       
     

       <h1 className='absolute bottom-25 text-[36px] text-[#5E2E53]'> Landrup <span className=' text-[#E1A1E9]'> Dance</span> </h1>
       <hr className='w-48 h-12  absolute underline-offset-4' /> 
       
       <button className='absolute bottom-14 w-[249px] p-4 class="block  
       text-[24px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none focus:border-blue-500  
        rounded-lg   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] 
        focus:outline-none focus:ring focus:ring-[#9771f3]"' 
        onClick={()=>navigate(`${DefaultRoutes.AktiviteterPage}`)
}>Kom i gang

</button>
       </main>
        </>
    )
}