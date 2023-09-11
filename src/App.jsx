import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer greeting='Disqueria especializada en Vinilos' greeting2='Todo para los amantes de la musica' />}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*<>
      <NavBar/>
      <ItemListContainer greeting='Disqueria especializada en Vinilos' greeting2='Todo para los amantes de la musica' />
    </>*/ 