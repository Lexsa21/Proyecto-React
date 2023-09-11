import React from 'react'
import { Link } from 'react-router-dom';

const Item =({product}) => {
    return (
        <div className='novedades'>
            <div className='productosNovedades'>
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <span>{product.price}</span>
                    <Link className='vermas' to={`/item/${product.id}`}>Ver mas</Link>
            </div>
        </div>
    );
}

export default Item
