import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Car = ()=> {

    const {car,precioTotal,vaciarCar, vaciarItem} = useContext(CartContext)

    const handleVaciar = ()=>{
        vaciarCar();
    }

    return (
        
        <div className="container">
            <h1 className="main-title2">Su compra</h1>

            {
                car.map((prod)=>(
                    <div key={prod.id}>
                        <h3 className='tituloProducto'>{prod.titulo}</h3>
                        <p>Precio Unit: {prod.precio} </p>
                        <p>Precio Total: ${prod.precio*prod.count} </p>
                        <p>Cantidad{''+prod.count} </p>
                        <br />
                        <button className='vaciar' onClick={()=>vaciarItem(prod.id)}>Eliminar</button>
                    </div>
                ))
            }
            {  
            car.length > 0 ?
            <>
                <h2 className='precioTotal'>Precio total: ${precioTotal()}</h2>
                <button className='vaciar' onClick={handleVaciar}>Vaciar</button>
                <Link className= "finCompra" to="/checkout" >Finalizar compra</Link>
            </> :
            <h2>El carrito se vacío </h2>
        }
        </div>
    )
}

export default Car