import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {CartContext} from '../context/CartContext'

function ItemDetail({item})  {

    const {car, agregarAlCar} = useContext(CartContext);
    console.log(car);

    const[count,setCount] = useState(1)

    const handleRestar = () => {
        count > 1 && setCount(count - 1)
    }

    const handleSumar = () => {
        count < item.stock && setCount(count + 1)
    }


    return (

        <div className="container1">
            <div className="producto-detalle">
                <img src={`/${item.imagen}`} alt="" />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion} </p>
                    <p className="precio">{"$"+item.precio}</p>
                    <ItemCount count={count} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={()=>{agregarAlCar(item,count)}} />
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail

/*

        <main>
            <article className='product'>
                <picture className='product__img'>
                    <img src="" alt="" />
                </picture>

                <div className='product__content'>
                    <p class='product__category'>Perfume</p>
                    <h1 className='product__title'>aca va el titulo del producto</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias facilis nulla voluptatem laborum quisquam illum magnam minus natus eum! Dolorum accusamus explicabo ipsum non est ipsam nisi, omnis at?</p>
                    <div className='flex-group'>
                        <p className='product__price'>$149</p>
                    </div>

                    <button className='button'>Add to Cart</button>
                </div>
            </article>
        </main>

*/ 
