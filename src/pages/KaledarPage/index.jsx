import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";

import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'
// import { Nav } from '../../components/Nav'

export const KalendarPage = ()=>{

    return (
        
        <>
       <main className=' p-8 h-full min-h-screen	 bg-[#5E2E53]'>
        <h1 className='text-[#EAEAEA] text-[36px] text-left'>Kalendar</h1>

        <section className=' mt-12 '>

            <div className='bg-[#EAEAEA] mb-4 p-6 rounded-[20px] text-center'> 

<h1 className='text-[36px]'>Junior Fitness</h1>
<h2 className='text-[18px]'>Mandag time</h2>

</div>
<div className='bg-[#EAEAEA] mb-4 p-6 rounded-[20px] text-center'> 

<h1 className='text-[36px]'>Junior Fitness</h1>
<h2 className='text-[18px]'>Mandag time</h2>

</div>
        </section>

        {/* <Nav /> */}
       </main>
        </>
    )


}