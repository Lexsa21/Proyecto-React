import React, { useState } from 'react'
import ImageCar from '../assets/car.svg'
import "./Estilos.css"

function CartWidget() {

    return (
        <>
        <div className='car'>
            <img style={{width: 20}} src={ImageCar} alt="" />
            <p>0</p>
        </div>
        </>
    )
}

export default CartWidget
