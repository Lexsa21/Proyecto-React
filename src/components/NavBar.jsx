import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (to) => {
        setMenuOpen(false);
        navigate(to);
    };

    return (
        <nav className='navbarContainer'>
            <Link to='/'>
                <h2 className='nav_title'>Lexsa Vinils</h2>
            </Link>

            <div className={`nav_items ${menuOpen ? 'open' : ''}`}>
                <Link to='/' onClick={() => handleNavClick('/')}>Inicio</Link>
                <Link to='/category/vinilos' onClick={() => handleNavClick('/category/vinilos')}>Vinilos</Link>
                <Link to='/category/cds' onClick={() => handleNavClick('/category/cds')}>CDs</Link>
                <Link to='/category/bandejas' onClick={() => handleNavClick('/category/bandejas')}>Bandejas</Link>
                <Link to='/sobrenosotros' onClick={() => handleNavClick('/sobrenosotros')}>Sobre Nosotros</Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                    className='nav-toggle'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Abrir menú'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className='cart-icon'>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
