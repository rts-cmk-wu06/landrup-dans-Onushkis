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
  // we need to look into the url of the page .. if it is equal to our velkommenpage link .. remove out navbar
const location = useLocation()

// this is going to be triggered whenever the app gets rerendered 
// const IsNavbarDisplayed = location.pathname !== DefaultRoutes.VelkommenPage
// this is going to be triggered whenever it  gets called 
const IsNavbarDisplayed = ()=>location.pathname !== DefaultRoutes.VelkommenPage

  useEffect(() => {
    // checks if the already saved token is expired, if so , remove it 
    const userData = window.localStorage.getItem('user')

    if(userData){
      const tokenExpirationDate = new Date(JSON.parse(userData).validUntil)

      if(tokenExpirationDate <= new Date()){
      window.localStorage.removeItem('user')
    }
    }

  }, []) 

  return (
    <div className="App">
      {props.children}
      {/* if the current url is not equal to velkommenPage display the navbar */}
      {IsNavbarDisplayed() ? <AppNavbar /> : null}
    </div>
  );
}

export default App;