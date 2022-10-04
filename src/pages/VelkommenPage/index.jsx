import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router'
import { DefaultRoutes } from "../../Routes";
import welcome from "../../assets/welcome.jpg"
import { NavLink , useParams} from "react-router-dom";
import Logo from "../../assets/Logo.png"




export const VelkommenPage = ()=>{
    // this to control the displaty of the button 
const [displayMainButton, setDisaplyMainButton] = useState(false)

    const navigate= useNavigate()

    // to display the button after 1500 ms
    useEffect(() => {
        // setTimeout is an api you can use to trigger a function or an event after an exact amuont of time 
        setTimeout(()=>{
            setDisaplyMainButton(true)
            },1500)
    }, [])
    return (
        <>
       <main className='relative h-screen flex items-center justify-center'>
       <img src={welcome} alt=""  className='object-cover h-screen ' />
       
     

      <img src={Logo} alt="" className='absolute top-2/4 left-0 animation-slide-right'/>
       
      {displayMainButton ? ( <button className='absolute bottom-14 w-[249px] p-4 class="block  
       text-[24px] text-center font-bold 
        text-[#EAEAEA] bg-[#5E2E53]  border-none focus:border-blue-500  
        rounded-lg   dark:focus:ring-[#9771f3] dark:focus:border-[#9771f3] hover:bg-[#dddbd4] 
        focus:outline-none focus:ring focus:ring-[#9771f3] animation-fade' 
        onClick={()=>navigate(`${DefaultRoutes.AktiviteterPage}`)
}>Kom i gang

</button>) : null}
       </main>
        </>
    )
}