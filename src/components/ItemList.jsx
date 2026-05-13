import Item from './Item';

function ItemList({ products }) {
    if (products.length === 0) {
        return (
            <div className='container'>
                <h2 className='main-title'>Nuestros Productos</h2>
                <p className='no-products'>No hay productos en esta categoría.</p>
            </div>
        );
    }

    return (
        <div className='container'>
            <h2 className='main-title'>Nuestros Productos</h2>
            <div className='productos'>
                {products.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;
