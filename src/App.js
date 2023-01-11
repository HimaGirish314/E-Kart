import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Route path="/cart"><Cart/></Route>
     </BrowserRouter>
  );
}

export default App;
