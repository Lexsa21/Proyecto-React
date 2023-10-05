import ImageCar from '../assets/car.svg'

import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function CartWidget() {

    const {cantidadEnCar} = useContext(CartContext)

    return (
        
        <div>
            <Link className="menu-link" to="/car">
                <img style={{width: 20}} src={ImageCar} alt="" />
                <span className="numerito">{cantidadEnCar()}</span>
            </Link>
        </div>
    )
}

export default CartWidget