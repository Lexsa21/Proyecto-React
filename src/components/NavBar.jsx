import React from 'react'
import CartWidget from './CartWidget';
import "./Estilos.css"

function NavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <h2 className='nav_title'>Lexsa Coffe</h2>
                <div className='nav_items'>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className='car'>
                    <CartWidget/>
                </div>
                
            </div>
        </>
    );
}

export default NavBar;
