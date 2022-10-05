import { useNavigate } from 'react-router'
import { DefaultRoutes } from '../Routes'



// props :^are the data that the component is going to acccept from outside`
export const AppActivityCard = ({element}) =>{
  // this useNavigate() is called a custom hook
  // useEffect , useState :^native hooks from react
  // any hook will probably start with the convntion useSomething ..
  const navigate = useNavigate()



    return (
      // attr :^key , id , className ..
      //  key={} or key=""
      //  events :^onChange , onClick ..
      //  onClick={}`onClick={(e)=> {}}
      // conncatention
      //  if you have two strings and you need to put them together you can do it like this :^string1 + string2
      //  DefaultRoutes.AktiviteterPage  + "/" + element.id 
      //  `${DefaultRoutes.AktiviteterPage}/${element.id}`
        <div key={element.id} onClick={(e) =>{navigate(DefaultRoutes.AktiviteterPage  + "/" + element.id)}} className={`h-[356px] mb-[34px] relative rounded-2xl rounded-br-none overflow-hidden`}>
         <img  src={element.asset?.url || ''}
        
        alt=""  className=' object-cover  h-full w-full  ' />

        <div className='absolute bottom-0 bg-[#E1A1E9]/[.6] w-full p-5 py-8  text-left rounded-tr-[50px]  text-[#000000] text-[20px]'>
          <div className='ml-4 font-poppins '> 
          <h1 className='text-[18px]'>{element.name}</h1>
          <h1 className='text-[18px]'>{element.minAge} - {element.maxAge}</h1>
          </div>

        </div>
        </div>
    )
}