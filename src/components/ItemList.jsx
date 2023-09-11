import Item from './Item';

/*agregue {products} al parentesis de itemList */ 
function ItemList({products}) {

    return(
        <div>
            {products.map((product)=>(
                <Item key={product.id} product ={product}/>
            ))}
        </div>
    );
}

export default ItemList