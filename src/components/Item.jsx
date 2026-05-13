import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className='producto'>
            <img src={`/${product.imagen}`} alt={product.titulo} />
            <div>
                <h3>{product.titulo}</h3>
                <span>${product.precio}</span>
                <Link className='ver-mas' to={`/item/${product.id}`}>Ver más</Link>
            </div>
        </div>
    );
};

export default Item;
