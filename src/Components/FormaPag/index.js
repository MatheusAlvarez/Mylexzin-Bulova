import React from 'react'
import './style.css';

import Elo from '../../assets/pagamentos/elo.png'
import mastercard from '../../assets/pagamentos/mastercard.png'
import mercadoPago from '../../assets/pagamentos/mercado-pago.png'
import Visa from '../../assets/pagamentos/visa.png'

const FormaPag = (props) =>{
    return(
        <>  
            <section className="pagamento">
                <h2 className="d-flex justify-content-center">Formas de Pagamento</h2>
                <div className="pagamento">
                        <img className="elo" src={Elo} alt="Logo Elo"/>
                        <img className="master" src={mastercard} alt="Logo Mastercard"/>
                        <img className="pago" src={mercadoPago} alt="mercado-pago-logo"/>
                        <img className="visa" src={Visa} alt="visa-logo"/>
                </div>
            </section>
        </>
    );
}

export default FormaPag;