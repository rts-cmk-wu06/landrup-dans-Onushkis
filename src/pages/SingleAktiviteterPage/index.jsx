import React,  { useState, useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";

// import nessdance from '../../assets/nessdance.jpg'

import axios from 'axios';



export const SingleAktiviteterPage = ()=>{
    // const navigate= useNavigate()

    const [activeClass, setActiveClass] = useState();
    const [activeTrainer, setActiveTrainer] = useState();
    const [allUserData , setAllUserData] = useState()
     const [isUserEnrolledInClass, setIsUserEnrolledInClass] = useState(false) 
    const [isLoading , setIsLoading] = useState(false)
    const navigate = useNavigate();
    const location =useParams()

const [userData , setUserData] = useState()
const [isUserRegistered, setIsUserRegistered] = useState(false)
    // Fetch Classes data
// async vs sync 
    const fetchClassData = async (id)=>{
        if(!id) return 
        setIsLoading(true)
        
        const response = await axios.get(`http://localhost:4000/api/v1/activities/${id}`)
        // here we are going to check if the users array in the response for the class contains the current user or not 
        // below :^i am checking that we have users in the classs .. and that the current user is loggein
        // and also that the class has the current userid 
        // if we have more than zero users with the same id as our user then our user is registered in the class
        if(response.data.users && response.data.users.length && getUserData()&& response.data.users.filter(user=>user.id == getUserData().userId).length){
            setIsUserRegistered(true)
        }else {
        setIsUserRegistered(false)
        }
        setIsLoading(false)
        setActiveClass(response.data)
        // fetchActiveTrainer(response.data.trainerId)
        }

const getUserData = () => {
    const user = window.localStorage.getItem('user')
    // the localStorage only saves strings ... like text 
    // parsing json means transforming from string to json
    //  JSON.stringify 
    if(user) setUserData(JSON.parse(user))
return user && JSON.parse(user)
}

        useEffect(()=>{
            // make sure to call the function on the first rendering for the compoennt 
            // to control when the function is going to be called 
            getUserData()


fetchClassData(location.id)

        },[])


        const joinClassHandler = async ()=>{
            // if the user is not logged in  dont allow him to enter this function 
            // early return 
            // this early return will make sure that we stop the function if he is not logged in 
            // also if we don't have the data for the class .. the function should stop 
            if(!userData || !activeClass) return 
        //  check if the user is registered in class or not .. if so , display the leave button 
        // if he is not registered , display the join button
        if(isUserRegistered){
            const response = await axios.delete(`http://localhost:4000/api/v1/users/${userData.userId}/activities/${activeClass.id}`,{  headers: {
                  "Authorization": `Bearer ${userData.token}`,
            },})
            console.log(response)
            setIsUserRegistered(false)
        }else {
            const response = await axios.post(`http://localhost:4000/api/v1/users/${userData.userId}/activities/${activeClass.id}`,null,{  headers: {
                "Authorization": `Bearer ${userData.token}`,
          },})
            console.log(response)
            setIsUserRegistered(true)

            }
        

        
        }

      /*  a button is displayed where users can click to sign up for this activity.

        If a user is already registered for this activity, the text "Leave" is displayed on the button and the user can
        click to exit the activity.

        If a user is not logged in, the button is not displayed.

        It must not be possible to register for the same activity more than once. 
        
        a user must not be able to register for activities that take place on the same day of the week.

        All activities have an age restriction. It must not be possible to register for an activity if
        you are not within the current limitation
 */

    return (
        <div className='bg-[#5E2E53] h-full min-h-screen w-screen'>
        {activeClass ? (<>
       <main className=' relative  flex items-center justify-center '>
        
        <img src={activeClass.asset.url} alt=""  className='object-cover w-full h-[489px] relative' />
        
        {userData ? (<button className='absolute bottom-14 w-[249px] p-4 block  
       text-[18px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none focus:border-blue-500  
        rounded-lg   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] 
        focus:outline-none focus:ring focus:ring-[#9771f3]' 
         onClick={()=>joinClassHandler()}
>{isUserRegistered ? 'leave' : 'join'}

</button>):null}


       </main>
<section className=' text-[#EAEAEA] text-left p-2 pb-[100px]'>

<h1 className='text-[24px] '>{activeClass.name}</h1>
<h2 className='text-[18px] mb-4'> {activeClass.minAge} - {activeClass.maxAge} år</h2>
<h2 className='w-[345px] text-[18px]'> {activeClass.description}</h2>
</section>
</>):null}
        </div>
    )
}