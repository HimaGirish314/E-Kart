import Header from './Components/Header/Header';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Cards from './Components/Cards/Cards';
import Context from './Components/Context/Context';

function App() {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Header /> 
          <Route path="/" component={Cards} exact/>
          <Route path="/cart" component={Cart} exact/>
        </BrowserRouter>
    </Context>
   </div>
  );
}

export default App;
