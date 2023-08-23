import React from 'react'
import "./Estilos.css"

function ItemListContainer(props) {
    return (
        <div className='containerh1'>
            <div className='title_main'>
                <h1>{props.texto}</h1>
                <p>{props.texto2}</p>
            </div>
        </div>

    )
}

export default ItemListContainer

