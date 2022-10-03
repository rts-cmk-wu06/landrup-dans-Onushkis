import React from 'react'
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import welcome from "../../assets/welcome.jpg"
import { NavLink , useParams} from "react-router-dom";




export const VelkommenPage = ()=>{
    const navigate= useNavigate()
    return (
        <>
       <main className='relative h-screen'>
       <img src={welcome} alt=""  className='object-cover h-screen ' />

       <button className=' absolute bottom-0' onClick={()=>navigate(`${DefaultRoutes.AktiviteterPage}`)
}>Klik me</button>
       </main>
        </>
    )
}