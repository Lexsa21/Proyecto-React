import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import Car from './components/Car';
import Checkout from './components/Checkout';
import Footer from './components/footer';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/car' element={<Car/>}/> 
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;