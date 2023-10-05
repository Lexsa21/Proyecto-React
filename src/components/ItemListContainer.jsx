import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase/config";


function ItemListContainer({greeting})  {

    const [products,setProducts] = useState([])
    const category = useParams().category; 

    useEffect(()=>{
        const productosRef = collection(db, "productos");

        const q = category ? query(productosRef, where("categoria","==", category)): productosRef;

        getDocs(q)
            .then((resp)=>{
                setProducts(
                    resp.docs.map((doc)=>{
                        return {...doc.data(), id: doc.id}
                    })
                )
            })
    },[category]); 

    return (
        <div className='containerh1'>
            <div className='title_main'>
                <h1 className='lobster'>Lexsa Vinils - Disqueria especializada en Vinilos</h1>
                <p>Todo para los amantes de la musica</p>
            </div>
            <div>
                <ItemList products= {products} />
            </div>
        </div>
    )
}

export default ItemListContainer