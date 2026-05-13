import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        setError('');

        const productosRef = collection(db, 'productos');
        const q = category
            ? query(productosRef, where('categoria', '==', category))
            : productosRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            })
            .catch(() => setError('No se pudieron cargar los productos. Intentá más tarde.'))
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className='containerh1'>
            <div className='title_main'>
                <h1 className='lobster'>Lexsa Vinils - Disquería especializada en Vinilos</h1>
                <p>Todo para los amantes de la música</p>
            </div>

            {loading && (
                <div className='loading'>
                    <div className='spinner'></div>
                    <p>Cargando productos...</p>
                </div>
            )}

            {error && <p className='error-msg center'>{error}</p>}

            {!loading && !error && <ItemList products={products} />}
        </div>
    );
}

export default ItemListContainer;
