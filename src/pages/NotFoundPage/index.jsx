import React from 'react'
import { useNavigate } from 'react-router'
import {DefaultRoutes} from '../../Routes'

export const NotFoundPage = ()=>{
    const navigate= useNavigate()
    return (
        <>
       <main>
     <h1>404</h1>
       <button onClick={()=>navigate(`${DefaultRoutes.VelkommenPage}`)
}>Go to home page</button>
       </main>
        </>
    )
}