import React, { useState, useEffect } from 'react'
// every import you are not using in the file may lead to a bead performance
// nowadays modern bundler can deal with this and remove it but in some cases it cant 
// so it is always better to remove unused imports
// it is better to remove it if you are not going to use it :D
import './App.css';

import {AppNavbar} from './components/AppNavbar'
import { useLocation } from 'react-router';
import { DefaultRoutes } from './Routes';

export const App = (props) => {

  const [userData , setUserData] = useState()
  // we need to look into the url of the page .. if it is equal to our velkommenpage link .. remove out navbar
const location = useLocation()

// this is going to be triggered whenever the app gets rerendered 
// const IsNavbarDisplayed = location.pathname !== DefaultRoutes.VelkommenPage
// this is going to be triggered whenever it  gets called 
const IsNavbarDisplayed = ()=> location.pathname.toLowerCase() !== DefaultRoutes.VelkommenPage.toLowerCase() && location.pathname.toLowerCase() !== DefaultRoutes.Login.toLowerCase()

  useEffect(() => {
    // checks if the already saved token is expired, if so , remove it 
    const userData = window.localStorage.getItem('user')

    //  the token is used to authanticate the user 
    // it is a encrypted string that the browser and the server should have to be able to communicate securely 
    //  ona => ano 
    // coffee => eeffoc
    //  rules for our agreement are only known by us 
    // whenever the browser send a request to the backend , the backend will ask if the browser have a token or not ... 
    
    if(userData){
      const tokenExpirationDate = new Date(JSON.parse(userData).validUntil)
      setUserData(JSON.parse(userData))

      if(tokenExpirationDate <= new Date()){
        // if the token is expired then the user has to login again
      window.localStorage.removeItem('user')
      setUserData()
    }
    }

  }, []) 

  return (
    <div className="App">
      {props.children}
      {/* if the current url is not equal to velkommenPage display the navbar */}
      {IsNavbarDisplayed() ? <AppNavbar  /> : null}
    </div>
  );
}

export default App;