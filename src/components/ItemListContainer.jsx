import React, { useEffect, useState } from 'react'
import productsJson from '../Productos.jsx'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'


function getProducts(){ /*dentro del parentesis tiene que ir cds pa filtrar solo ese producto*//* agregue cds*/
/*
    return new Promise((resolve)=>{
        setTimeout(()=>{
            if (cds!== undefined) {
                const productosFiltrados = productsJson.filter(
                    (item)=> item.category == cds
                );
                resolve(productosFiltrados)
            }else{
                resolve(productsJson);
            }
        },2000);
    });
    */

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productsJson);
        },1000);
    });
}


function ItemListContainer({greeting})  {

    const [products,setProducts] = useState([])
    const category = useParams().category; 

    useEffect(()=>{
        getProducts()
            .then((data)=>{
                if (category){
                    setProducts(data.filter((prod)=>prod.category === category))
                } else{
                    setProducts(data);
                }
            })
    },[category]); 

    return (
        <div className='containerh1'>
            <div className='title_main'>
                <h1>{greeting}</h1>
                <p>{greeting}</p>
            </div>
            <div>
                <ItemList products= {products} />
            </div>
        </div>
    )
}


export default ItemListContainer

/*<ItemList products= {products} />*/
/*<ItemList/>*/