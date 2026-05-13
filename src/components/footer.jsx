const Footer = () => {
    return (
        <footer>
            <div className='main'>
                <div className='brand'>
                    <h3>Lexsa Vinil</h3>
                    <p>La disquería especializada en vinilos, CDs y equipos de audio para los verdaderos amantes de la música.</p>
                </div>
                <div className='subtitulosfooter1'>
                    <h3>Compañía</h3>
                    <ul>
                        <li><a href='#'>Términos y condiciones</a></li>
                        <li><a href='#'>Privacidad y Política</a></li>
                        <li><a href='#'>FAQs</a></li>
                    </ul>
                </div>
                <div className='subtitulosfooter1'>
                    <h3>Sobre Nosotros</h3>
                    <ul>
                        <li><a href='#'>Equipo</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Contacto</a></li>
                        <li><a href='#'>Tienda</a></li>
                    </ul>
                </div>
                <div className='subtitulosfooter1'>
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href='#'>Preguntas Frecuentes</a></li>
                        <li><a href='#'>Estado de Compra</a></li>
                        <li><a href='#'>Atención al Cliente</a></li>
                        <li><a href='#'>Otros Servicios</a></li>
                    </ul>
                </div>
                <div className='subtitulosfooter'>
                    <h3>Newsletter</h3>
                    <form action=''>
                        <input type='text' placeholder='E-mail' />
                        <button className='btn'>Suscribirse</button>
                    </form>
                </div>
            </div>
            <hr />
            <p className='copyright'>Todos los derechos reservados &copy; {new Date().getFullYear()} | LEXSA VINIL</p>
        </footer>
    );
};

export default Footer;
