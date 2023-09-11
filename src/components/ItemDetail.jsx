import React from 'react'

function ItemDetail({item})  {
    return (
        <div>
            <div>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <span>{item.price}</span>
            </div>
        </div>
    )
}

export default ItemDetail
