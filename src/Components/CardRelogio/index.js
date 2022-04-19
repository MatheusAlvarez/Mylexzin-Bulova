import React from 'react'
import './style.css';

const CardRelogio = (props) =>{
    return(
        <>  
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3 container-margin">
                <div className="destaques">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="tmn-relogio" src={props.image} alt="Relógio Bulova" /> 
                            </div>
                            <div className="flip-card-back">
                            <h2 className="logo-card">MyLexzin</h2>
                                <p>Relógio Bulova Mascu...</p>
                                <p>R${props.valor}</p>
                                <p>Gênero: Masculino</p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </>
    );
}

export default CardRelogio;