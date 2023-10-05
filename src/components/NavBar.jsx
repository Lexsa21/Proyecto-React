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
                <Link to='/category/vinilos'>Vinilos</Link>
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