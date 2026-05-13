import ImageCart from '../assets/car.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const { cantidadEnCart } = useContext(CartContext);
    const cantidad = cantidadEnCart();

    return (
        <div>
            <Link className='menu-link' to='/cart'>
                <img style={{ width: 20 }} src={ImageCart} alt='Carrito de compras' />
                {cantidad > 0 && <span className='numerito'>{cantidad}</span>}
            </Link>
        </div>
    );
}

export default CartWidget;
