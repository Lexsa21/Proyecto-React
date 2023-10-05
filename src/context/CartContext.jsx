import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children} ) =>{
    const [car, setCar] = useState([])


    const agregarAlCar = (item,count)=>{
        const itemAgregado = {...item,count};

        const nuevoCar = [...car];
        const estaEnElCar = nuevoCar.find((producto)=> producto.id === itemAgregado.id);

        if (estaEnElCar){
            estaEnElCar.count += count;
        } else{
            nuevoCar.push(itemAgregado);
        }
        setCar(nuevoCar)
    }

    const cantidadEnCar = ()=>{
        return car.reduce((acc,prod)=> acc+ prod.count, 0)
    }

    const precioTotal = ()=>{
        return car.reduce((acc,prod)=> acc+ prod.precio * prod.count,0)
    }

    const vaciarCar = ()=>{
        setCar([]);
    }

    const vaciarItem = (itemId) =>{
        const remove = car.filter((item)=> item.id !== itemId);
        setCar(remove)
    }

    return (
        <CartContext.Provider value={{car, agregarAlCar, cantidadEnCar,precioTotal,vaciarCar, vaciarItem}}>
            {children}
        </CartContext.Provider>
    )
}