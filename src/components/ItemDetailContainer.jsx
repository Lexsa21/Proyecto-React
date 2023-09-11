import { useEffect, useState } from 'react'
import  ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import productsJson from '../Productos.jsx'

const pedirItemPorId = (id)=>{
    return new Promise((resolve,reject)=>{

        const item = productsJson.find((el)=>el.id === id)

        if(item){
            resolve(item);
        }else{
            reject({
                error:"No se encontró el producto"
            })
        }
    })
}


const ItemDetailContainer = () => {

    const [item,setItem]= useState(null);
    const id = useParams().id;

    useEffect(()=>{
        pedirItemPorId(Number(id))
            .then((res)=>{
                setItem(res);
            });
    },[id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer
