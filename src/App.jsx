import './App.css';

import {AppNavbar} from './components/AppNavbar'
export const App = (props) => {

  // global state
  // translations 

  return (
    <div className="App">
      {/* <AppNavbar /> */}
      {props.children}
    </div>
  );
}

export default App;