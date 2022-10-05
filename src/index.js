import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {RoutesModule} from './Routes'

 //check if the token isn't expired
  // that is not the best way to do it

  
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App>
        {RoutesModule}
        </App>
    </React.StrictMode>
  </BrowserRouter>
);
