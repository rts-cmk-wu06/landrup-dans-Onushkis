import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";
// import nessdance from '../../assets/nessdance.jpg'
import {AppActivityCard} from '../../components/AppActivityCard'


export const AktiviteterPage = ()=>{
    

        // classes are an array 
        // array is a data structure that acts like a wrapper for multiple elements 
        // array = [element1 , element2 , element3 , ... ] = [óbject , object , object , ...]
        //  in most cases when we fetch data from an api 
        //  the response is going to have the data in either two models :
        //  1- it may contain an array of objects 
        //  object is also a data structre but it reflects only one element

        const [allClasses, setAllClasses] = useState([])
      const [ randClass, setRandClass] = useState()
    //   const navigate = useNavigate()

    const fetchClasses = async () => {
        const responce = await axios.get('http://localhost:4000/api/v1/activities')
        console.log(responce)
        // we have here an array of objects 
        setAllClasses(responce.data)
        setRandClass(responce.data[Math.floor(Math.random()*responce.data.length)]
        )
      }

      useEffect(() => {
        console.log('it is working')
        fetchClasses()
      }, [])


    return (
        
        <>
       <main className=' p-8 h-full min-h-screen	 bg-[#5E2E53]'>
        <h1 className='text-[#EAEAEA] text-[36px] text-left'>Aktiviteter</h1>

        <section className='mt-5 h-3/6  w-full  rounded-2xl overflow-hidden'>
{/*  to display data from array of objects we have to write a loop */}
{/* .map is a method that has been introduced in js es2015 ..   */}`
{/* () => {}`this is an arrow function .. think of it just like a normal function  */}
{/* so we are going to print out every element in the array */}
{/*  how does react know what to change  */}
{/* for react to be able to differtiate between them , we have to add a key prop to the wrapper  element for every child  */}
{/* todo : talk about the virtual dom  */}
{/* react , vue //   */}
 { allClasses.map((element)=>{
    return (
        // h-[356px] this kind of classes is called atomic css 
        // tailwind is not more than a utility classes library
        <AppActivityCard element={element} key={element.id} />
    )
 })
 
}

       
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
}