import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import axios from 'axios'


export const KalendarPage = ()=>{

const [userData,setUserData] = useState()
const [userActivities,setUserActivities] = useState()


    const navigate = useNavigate()


    const fetchData = async () => {
        const response = await axios.get('http://localhost:4000/api/v1/activities',{  headers: {
            "Authorization": `Bearer ${userData.token}`,
      },})

        setUserActivities(response.data.filter(activity => activity.users.filter(u => u.id == userData.userId).length))
      }

      useEffect(() => {
        // console.log('it is working')
        if(userData)fetchData()
      }, [userData])



//  use state forces the component to rerender which is an expensive process 

    useEffect(() => {
        const isUserLoggedin = !!window.localStorage.getItem('user')

        if(!isUserLoggedin) navigate(DefaultRoutes.Login) 
        if(isUserLoggedin) setUserData(JSON.parse(window.localStorage.getItem('user')))
    }, [])

    return (
        
        <>
       <main className=' p-8 h-full min-h-screen bg-[#5E2E53]'>
        <h1 className='text-[#EAEAEA] text-[36px] text-left'>Kalendar</h1>
{userActivities && userActivities.length ? (
    <section className=' mt-12 '>
    {userActivities.map((activity)=>{
    return (
            <div key={activity.id} className='bg-[#EAEAEA] mb-4 p-6 rounded-[20px] text-center'> 

<h1 className='text-[36px]'>{activity.name}</h1>
<h2 className='text-[18px]'>{activity.weekday} {activity.time} </h2>

</div>
)
})}


        </section>
):null}
        {/* <Nav /> */}
       </main>
        </>
    )


}