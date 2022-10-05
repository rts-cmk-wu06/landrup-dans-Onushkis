import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";
import welcome from "../../assets/welcome.jpg"
import { FiHome } from 'react-icons/fi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiTwotoneCalendar } from 'react-icons/ai'
 import { Nav } from '../../components/Nav'


 export const Login = ()=>{

 const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    // Readirect page from there to there
    const redirectToHomePage = () => {
        navigate('/VelkommenPage')
    }

    

    useEffect(()=>{
        // todo : implement proper middlewares to handle auth
        // if the user is logged in redirect him to home page 
        const userData = window.localStorage.getItem('user')
        if(userData) redirectToHomePage()
    }
        ,[])

        // Login api + safe in local storage

        const loginHandler = async(e) =>{
            e.preventDefault();
           try {
               const response = await axios.post('http://localhost:4000/auth/token' , {username , password})
               
           // not secure , todo : fix it later
           window.localStorage.setItem('user' , JSON.stringify(response.data))
           setTimeout(()=>{
               redirectToHomePage()
           },1000)
           } catch (error) {
               // 
           }
           }




    return (
        <>
       <main className='relative h-screen flex items-center justify-center'>
       <img src={welcome} alt=""  className='object-cover h-screen ' />
       
     

       {/* Form components  */}

       <form onSubmit={(e)=> loginHandler(e)}> 
        
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="username" className="block p-4   pl-14 w-full text-[22px]  text-gray-900 bg-gray-50  border border-gray-300 rounded-full dark:placeholder-gray-400 dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3]" placeholder="brugernavn" required 
        
        />
           <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="block p-4 pl-14 w-full mt-6 mb-6 text-[22px]  text-gray-900 bg-gray-50  border border-gray-300 rounded-full dark:placeholder-gray-400  dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3]" placeholder="adgangskode " required 
        
        />
       <button className='absolute bottom-14 w-[249px] p-4 class="block  
       text-[24px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none focus:border-blue-500  
        rounded-lg   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] 
        focus:outline-none focus:ring focus:ring-[#9771f3] animation-fade' >Login in
        
</button>) 

</form>

       </main>
        </>
 )
    }}