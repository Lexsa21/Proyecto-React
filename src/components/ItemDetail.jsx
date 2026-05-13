import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail({ item }) {
    const { agregarAlCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [agregado, setAgregado] = useState(false);

    const handleRestar = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleSumar = () => {
        if (count < item.stock) setCount(count + 1);
    };

    const handleAgregar = () => {
        agregarAlCart(item, count);
        setAgregado(true);
    };

    return (
        <div className='container1'>
            <div className='producto-detalle'>
                <img src={`/${item.imagen}`} alt={item.titulo} />
                <div>
                    <h3 className='titulo'>{item.titulo}</h3>
                    <p className='descripcion'>{item.descripcion}</p>
                    <p className='precio'>${item.precio}</p>

                    {agregado ? (
                        <p className='agregado-msg'>✓ Producto agregado al carrito</p>
                    ) : (
                        <ItemCount
                            count={count}
                            handleRestar={handleRestar}
                            handleSumar={handleSumar}
                            handleAgregar={handleAgregar}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
