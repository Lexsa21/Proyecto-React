
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer texto='Bienvenidos a Cafeteria Lexsa' texto2='Cafe para todos los paladares' />
    </>
  );
}

export default App;
