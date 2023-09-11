import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className='navbarContainer'>
            <Link to='/'>
                <h2 className='nav_title'>Lexsa Vinils</h2> 
            </Link>
            <div className='nav_items'>
                <Link to='/'>Inicio</Link>
                <Link to='/category/vinyl'>Vinilos</Link>
                <Link to='/category/cds'>Cds</Link>
                <Link to='/category/bandejas'>Bandejas</Link>
                <Link>Sobre Nosotros</Link>
            </div>
            <div className='car'>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default NavBar;
/*correcion li a, fijarme como hacerlo en css*/
/*
<div className='nav_items'>
    <Link to='/'>Inicio<Link/>
    <Link to='/category/vinilos'>Vinilos<Link/>  fijarme el css con las etiquetas a(repetir esto en en la ruta app por cada componene creado)
<div/>
*/
/* <nav className='navbarContainer'>
            <h2 className='nav_title'>Lexsa Vinils</h2> 
            <div className='nav_items'>
                <a href="#">Inicio</a>
                <a href="#">Vinilos</a>
                <a href="#">Cds</a>
                <a href="#">Bandejas</a>
                <a href="#">Sobre Nosotros</a>
            </div>
            <div className='car'>
                <CartWidget/>
            </div>
        </nav>*/ 