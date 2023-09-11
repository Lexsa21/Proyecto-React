import ImageCar from '../assets/car.svg'

function CartWidget() {

    return (
        <div className='car'>
            <img style={{width: 20}} src={ImageCar} alt="" />
            <span>0</span>
        </div>
    )
}

export default CartWidget

/*fijarse que la imagen de carrito esta en asset, si lo paso a public tira error*/