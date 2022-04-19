import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Info = (props) =>{
    return(
        <>  
            <section className="d-flex justify-content-center info-inicio">
            <div class="informacoes">
                <ul>

                    <Link to="/faq">
                        <li><a href="faq.html">FAQ</a></li>
                    </Link>

                    <Link to="/contato">
                        <li><a href="conosco.html">Fale Conosco</a></li>
                    </Link>

                    <Link to="/rastrear-pedido">
                        <li><a href="rastrear.html">Rastrear Pedido</a></li>
                    </Link>

                    <Link to="/termos-de-uso">
                        <li><a href="termo.html">Termos de Uso</a></li>
                    </Link>

                    <Link to="politica-de-privacidade">
                        <li><a href="politica.html">Política de Privacidade</a></li>
                    </Link>
                </ul>
            </div>
            </section>
        </>
    );
}

export default Info;