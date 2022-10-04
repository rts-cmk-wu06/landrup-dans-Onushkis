import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";
import nessdance from '../../assets/nessdance.jpg'



export const AktiviteterPage = ()=>{
    

    const AktiviteterPage = () => {
        const [allClasses, setAllClasses] = useState([])
      const [ randClass, setRandClass] = useState()
    //   const navigate = useNavigate()

    const fetchClasses = async () => {
        const responce = await axios.get('http://localhost:4000/api/v1/activities')
        setAllClasses(responce.data)
        setRandClass(responce.data[Math.floor(Math.random()*responce.data.length)]
        )
      }

      useEffect(() => {
        fetchClasses()
      }, [])

    return (
        
        <>
       <main className=' p-8 h-full bg-[#5E2E53]'>
        <h1 className='text-[#EAEAEA] text-[36px] text-left'>Aktiviteter</h1>

        <section className='mt-5 h-3/6  w-full relative rounded-2xl overflow-hidden'>

        <img  src={element.asset?.url || ''}
        
        alt=""  className='rounded-2xl object-cover  h-full w-full rounded-br-none ' />

        <div className='absolute bottom-0 bg-[#E1A1E9] w-full p-3 text-left rounded-tr-[50px]  text-[#000000] text-[20px]'>
          <div className='ml-4 font-poppins '> 
          <h1 className='text-[18px]'>{element.name}</h1>
          <h1 className='text-[18px]'>{element.minAge.maxAge}</h1>
          </div>

        </div>
        </section>

        {/* <section className='mt-5 h-3/6  w-full relative rounded-2xl overflow-hidden'>

<img src={nessdance} alt=""  className='rounded-2xl object-cover  h-full w-full rounded-br-none ' />

<div className='absolute bottom-0 bg-[#E1A1E9] w-full p-3 text-left rounded-tr-[50px]  text-[#000000] text-[20px]'>
  <div className='ml-4 font-poppins '> 
  <h1 className='text-[18px]'>Junior Fitness Dance</h1>
  <h1 className='text-[18px]'>10-12 år</h1>
  </div>

</div>
</section>

<section className='mt-5 h-3/6  w-full relative rounded-2xl overflow-hidden'>

<img src={nessdance} alt=""  className='rounded-2xl object-cover  h-full w-full rounded-br-none ' />

<div className='absolute bottom-0 bg-[#E1A1E9] w-full p-3 text-left rounded-tr-[50px]  text-[#000000] text-[20px]'>
  <div className='ml-4 font-poppins '> 
  <h1 className='text-[18px]'>Junior Fitness Dance</h1>
  <h1 className='text-[18px]'>10-12 år</h1>
  </div>

</div>
</section> */}
        
       </main>
        </>
    )
}}