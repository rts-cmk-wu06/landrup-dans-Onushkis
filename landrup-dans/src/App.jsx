import './App.css';

import {AppNavbar} from './components/AppNavbar'
export const App = (props) => {

  // global state
  // translations 

  return (
    <div className="App">
      {/* it is a good practice to use the name convention of AppNavbar to not conflict with any other compnents with similar names */}
      {/* <AppNavbar /> */}
      {props.children}
    </div>
  );
}

export default App;