import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

function Checkout() {
    const [pedidoId, setPedidoId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { cart, precioTotal, vaciarCart } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = async (data) => {
        setLoading(true);
        setError('');
        try {
            const pedido = {
                cliente: data,
                productos: cart,
                total: precioTotal(),
                fecha: new Date().toISOString()
            };
            const pedidosRef = collection(db, 'pedidos');
            const doc = await addDoc(pedidosRef, pedido);
            setPedidoId(doc.id);
            vaciarCart();
        } catch (err) {
            setError('Hubo un error al procesar tu compra. Intentá de nuevo.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (pedidoId) {
        return (
            <div className='container'>
                <h2 className='main-title'>¡Gracias por tu compra!</h2>
                <p className='numPedido'>Tu número de pedido es: <strong>{pedidoId}</strong></p>
            </div>
        );
    }

    return (
        <div className='container'>
            <h1 className='main-title2'>Finalizar compra</h1>

            {error && <p className='error-msg'>{error}</p>}

            <form className='formulario' onSubmit={handleSubmit(comprar)}>
                <div className='form-field'>
                    <input
                        type='text'
                        placeholder='Ingresá tu nombre'
                        {...register('nombre', { required: 'El nombre es obligatorio', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })}
                    />
                    {errors.nombre && <span className='error-msg'>{errors.nombre.message}</span>}
                </div>

                <div className='form-field'>
                    <input
                        type='email'
                        placeholder='Ingresá tu e-mail'
                        {...register('email', {
                            required: 'El e-mail es obligatorio',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ingresá un e-mail válido' }
                        })}
                    />
                    {errors.email && <span className='error-msg'>{errors.email.message}</span>}
                </div>

                <div className='form-field'>
                    <input
                        type='tel'
                        placeholder='Ingresá tu teléfono'
                        {...register('telefono', {
                            required: 'El teléfono es obligatorio',
                            pattern: { value: /^[0-9+\s\-()]{7,15}$/, message: 'Ingresá un teléfono válido' }
                        })}
                    />
                    {errors.telefono && <span className='error-msg'>{errors.telefono.message}</span>}
                </div>

                <button className='enviar' type='submit' disabled={loading}>
                    {loading ? 'Procesando...' : 'Confirmar compra'}
                </button>
            </form>
        </div>
    );
}

export default Checkout;
