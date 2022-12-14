import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";
import welcome from "../../assets/welcome.jpg"
import img2 from "../../assets/img2.png"

import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'
//  import { Nav } from '../../components/Nav'

import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';


const lOGINSchema = Yup.object().shape({
    username: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
password: Yup.string() .min(4, 'Too Short!')
.required('Required'),
});

 export const Login = () => {

    // hoocks :^useState , useEffect , ... use .. 
    const navigate = useNavigate()

    // Readirect page from there to there
    const redirectToHomePage = () => {
        // 
        navigate(DefaultRoutes.VelkommenPage)
    }

    

    useEffect(()=>{
        // todo : implement proper middlewares to handle auth
        // if the user is logged in redirect him to home page 
        const userData = window.localStorage.getItem('user')
        if(userData) redirectToHomePage()
    }
        ,[])


        // Login api + safe in local storage

        const loginHandler = async({username , password}) =>{
           try {
            // the link im senden user name and password to this link
            //I get the respoce and than i get the token

               const response = await axios.post('http://localhost:4000/auth/token' , {username , password})
               
           // Here im sving dATA TO MY LOCAL STORAGE 
           // than we  redirectToHomePage()
           window.localStorage.setItem('user' , JSON.stringify(response.data))
           setTimeout(()=>{
               redirectToHomePage()
           },300)
           } catch (error) {
               // 
           }
           }




    return (
        <>
       <main className='relative h-screen flex items-center justify-center'>

{/* in css there is the concept of z-index race  */}
{/* this means that if you started any element from a specific z-index */}
{/* it will trigger all overlaying elements to start from a bigger z-index */}
{/* we always need to start from 1,2,3 not 10,20,30 */}
{/* a lot of people tend to use z-index like 99999 and that is totally wrong */}
{/* in negative -1,-2,-3 not -10, -20, -30 */}
       <img src={welcome} alt=""  className='object-cover h-screen  fixed -z-10' />
       <img src={img2} alt=""  className='object-cover h-screen  fixed -z-10' />

       
     

       {/* Form components  */}
       <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values )=> loginHandler(values )}
      validationSchema={lOGINSchema}
    >
        {({ errors, touched }) => {
            return (


      <Form>
         <Field  autoComplete="off" name="username"  className="block p-[0.5rem]  pl-14 w-full text-[22px]  text-gray-900 bg-gray-50 border border-gray-300  dark:placeholder-gray-400 dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] " placeholder="brugernavn" required  />
        {/* <Field value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="username" className="block p-[0.5rem]  pl-14 w-full text-[22px]  text-gray-900 bg-gray-50 border border-gray-300  dark:placeholder-gray-400 dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3]" placeholder="brugernavn" required  
         /> */}
        <p className='text-[#ff0000] text-left'>{errors.username && touched.username ? (
             <span>{errors.username}</span>
           ) : null}</p>

           <div className="mb-3"></div>
        {/* whenever the user clicks any key in the keyboard inside the input , the input fires an event .. this event is an object that conains info about what the user has did in the input .. one key in this info is called keyCode .. this keyCode represets the key that the user has entered. ex: enter=13 ...  */}
        <Field name="password"  className="block p-[0.5rem]  pl-14 w-full text-[22px]  text-gray-900 bg-gray-50 border border-gray-300  dark:placeholder-gray-400 dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] " placeholder="adgangskode " required  />
        <p className='text-[#ff0000] text-left'>{errors.password && touched.password ? (
             <span>{errors.password}</span>
           ) : null}</p>
                      <div className="mb-3"></div>

         
       <button  type="submit" className='  w-[249px] p-4 text-[24px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none  
        rounded-lg      ' >Login in
        
</button>) 

</Form>
        )}}

</Formik>
       </main>
        </>
 )
    }