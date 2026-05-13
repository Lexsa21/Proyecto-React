import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, precioTotal, vaciarCart, vaciarItem } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className='container'>
                <h1 className='main-title2'>Tu carrito</h1>
                <div className='carrito-vacio'>
                    <h2>Tu carrito está vacío</h2>
                    <Link className='finCompra' to='/'>Ver productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <h1 className='main-title2'>Tu carrito</h1>

            {cart.map((prod) => (
                <div key={prod.id} className='carrito-item'>
                    <img src={`/${prod.imagen}`} alt={prod.titulo} className='carrito-item-img' />
                    <div>
                        <h3 className='tituloProducto'>{prod.titulo}</h3>
                        <p>Precio unitario: ${prod.precio}</p>
                        <p>Cantidad: {prod.count}</p>
                        <p>Subtotal: ${prod.precio * prod.count}</p>
                    </div>
                    <button className='vaciar' onClick={() => vaciarItem(prod.id)}>Eliminar</button>
                </div>
            ))}

            <div className='carrito-footer'>
                <h2 className='precioTotal'>Total: ${precioTotal()}</h2>
                <button className='vaciar' onClick={vaciarCart}>Vaciar carrito</button>
                <Link className='finCompra' to='/checkout'>Finalizar compra</Link>
            </div>
        </div>
    );
};

export default Cart;
