import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const agregarAlCart = (item, count) => {
        const itemAgregado = { ...item, count };
        const nuevoCart = [...cart];
        const estaEnElCart = nuevoCart.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCart) {
            estaEnElCart.count += count;
        } else {
            nuevoCart.push(itemAgregado);
        }
        setCart(nuevoCart);
    }

    const cantidadEnCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.count, 0);
    }

    const vaciarCart = () => {
        setCart([]);
    }

    const vaciarItem = (itemId) => {
        const remove = cart.filter((item) => item.id !== itemId);
        setCart(remove);
    }

    return (
        <CartContext.Provider value={{ cart, agregarAlCart, cantidadEnCart, precioTotal, vaciarCart, vaciarItem }}>
            {children}
        </CartContext.Provider>
    )
}
