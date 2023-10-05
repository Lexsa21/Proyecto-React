import React from 'react'

const Footer =()=> {
    return (
        <footer>
        <div class="main">
            <div class="brand">
                <h3>Lexa Vinil</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum animi ipsum! Sed nihil
                    consequatur vero maxime ipsa quas dolore consequuntur nostrum. Fuga repudiandae, harum ab ex modi
                    labore iste.</p>
            </div>
            <div class="subtitulosfooter1">
                <h3>Compañía</h3>
                <li><a href="#">Terminos y condiciones</a></li>
                <li><a href="#">Privacidad y Politica</a></li>
                <li><a href="#">FAQS</a></li>
            </div>
            <div class="subtitulosfooter1">
                <h3 class="datos">Sobre Nosotros</h3>
                <li><a href="#">Equipo</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Tienda</a></li>
            </div>
            <div class="subtitulosfooter1">
                <h3>Ayuda</h3>
                <li><a href="#">Preguntas Frecuentes</a></li>
                <li><a href="#">Estado de Compra</a></li>
                <li><a href="#">Atención al Cliente</a></li>
                <li><a href="#">Otros Servicios</a></li>
            </div>
            <div class="subtitulosfooter">
                <h3>Newsletter</h3>
                <form action="">
                    <input type="text" placeholder="E-mail"/>
                    <button class="btn">Subscribe</button>
                </form>
            </div>
        </div>
        <hr/>
        <p class="copyright">Todos los derechos reservados &copy; {new Date(). getFullYear()} | LEXSA VINIL</p>
    </footer>
    )
}

export default Footer
