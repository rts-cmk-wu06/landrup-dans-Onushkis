import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import { NavLink , useParams} from "react-router-dom";
// import nessdance from '../../assets/nessdance.jpg'
import {AppActivityCard} from '../../components/AppActivityCard'


export const SearchPage = () => {
  const [allClasses, setAllClasses] = useState([])
  const [searchValue , setSearchValue] = useState('')
  const [searchedClasses, setSearchedClasses] = useState([])

const fetchClasses = async () => {
    const responce = await axios.get('http://localhost:4000/api/v1/activities')
    console.log(responce)
    // we have here an array of objects 
    setAllClasses(responce.data)
  }

  useEffect(() => {
    console.log('it is working')
    fetchClasses()
  }, [])

  const searchClasses = (event)=>{
    // event.target.value 
    setSearchValue(event.target.value)
    // allClasses [{name:''}]
// filter is a method that has been introduced inside the ecma2015
    const searchedClasses = allClasses.filter((element)=> {
    // does the element name is equal to the value the user has entered
    return event.target.value && event.target.value.length && element.name.toLowerCase().slice(0,event.target.value.length) === event.target.value.toLowerCase()
    })

    setSearchedClasses(searchedClasses)
  }

return (
    
    <>
   <main className=' p-8 h-full min-h-screen	  bg-[#5E2E53]'>
    <h1 className='text-[#EAEAEA] text-[36px] text-left'>Søgeside</h1>

    <input type="text" onChange={(event) =>
    searchClasses(event)
    } />

    <section className='mt-5 h-3/6  w-full  rounded-2xl overflow-hidden'>
{/*  to display data from array of objects we have to write a loop */}
{/* .map is a method that has been introduced in js es2015 ..   */}`
{/* () => {}`this is an arrow function .. think of it just like a normal function  */}
{/* so we are going to print out every element in the array */}
{/*  how does react know what to change  */}
{/* for react to be able to differtiate between them , we have to add a key prop to the wrapper  element for every child  */}
{/* todo : talk about the virtual dom  */}
{/* react , vue //   */}
{/* we have to display only the searched classes if the user is searching */}
{/* how do we know if the user is searching */}
{searchValue? ( 
  <>
  {/* if the user has enetered anything in search , display from the searchedd classes data */}
  { searchedClasses.map((element)=>{
return (
    // h-[356px] this kind of classes is called atomic css 
    // tailwind is not more than a utility classes library
    <AppActivityCard element={element} key={element.id} />
)
})
}
  </>
) :(
  <>
  {/* if the user hasn't entered anything in search, display from the all classes data */}
  { allClasses.map((element)=>{
return (
    // h-[356px] this kind of classes is called atomic css 
    // tailwind is not more than a utility classes library
    <AppActivityCard element={element} key={element.id} />
)
})
}

  </>
)}


   
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

export default SearchPage
