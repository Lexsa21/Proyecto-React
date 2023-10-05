import Item from './Item';

function ItemList({products}) {

    return(

        <div className="container">
            <h2 className="main-title">Nuestros Productos</h2>
            <div className="productos"> 
                {products.map((product)=>(
                    <Item key={product.id} product ={product}/>
                ))}
            </div>
        </div>
    );
}

export default ItemList