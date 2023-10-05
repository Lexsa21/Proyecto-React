import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebase/config'


function Checkout() {

    const [pedidoId, setPedidoId] = useState("")

    const {car,precioTotal,vaciarCar} = useContext(CartContext)

    const {register,handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: car,
            total: precioTotal()
        }

        const pedidosRef = collection (db,"pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc)=> {
                setPedidoId(doc.id)
                vaciarCar()
            })
    }

    if (pedidoId){
        return(
            <div className='container'>
                <h2 className='main-title'>Muchas gracias por tu compra</h2>
                <p className='numPedido'>Tu numero de pedido es: {pedidoId} </p>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1 className='main-title2'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <input type='text' placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input type='email' placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type='phone' placeholder='Ingresá tu teléfono' {...register("telefono")} />

                <button className='enviar' type='submit'>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
