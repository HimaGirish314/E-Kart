import Header from './Components/Header/Header';
import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Cards from './Components/Cards/Cards';
// import Context from './Components/Context/Context';
import { appContext } from './Components/Context/Context';
function App() {
  const [busket,setBusket]=useState([])
  return (
    <div>
      <appContext.Provider value={{busket,setBusket}}>
        <BrowserRouter>
          <Header  /> 
          <Route path="/" component={Cards} exact/>
          <Route path="/cart" component={Cart} exact/>
        </BrowserRouter>
    </appContext.Provider>
   </div>
  );
}

export default App;
