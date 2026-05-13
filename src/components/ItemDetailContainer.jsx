import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        setError('');

        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setItem({ ...resp.data(), id: resp.id });
                } else {
                    setError('Producto no encontrado.');
                }
            })
            .catch(() => setError('No se pudo cargar el producto. Intentá más tarde.'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className='loading'>
                <div className='spinner'></div>
                <p>Cargando producto...</p>
            </div>
        );
    }

    if (error) {
        return <p className='error-msg center'>{error}</p>;
    }

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
