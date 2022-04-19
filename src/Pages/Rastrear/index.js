import React from 'react'

const Rastrear = () =>{
    return(
        <>
            <div className="container">
            <h2 className="d-flex justify-content-center mt-3 mb-3">Rastrear Pedido</h2>
                <div id="wrap">
                <p>Caso o seu Código de Rastreamento não funcione no link acima, com certeza funcionará em um dos links abaixo:</p>
                        <p><a href="http://www.correios.com.br/sistemas/rastreamento">http://www.correios.com.br/sistemas/rastreamento</a></p>
                        <p>Se ainda assim tiver problemas em rastrear seus pedidos, envie um e-mail para nosso suporte, incluindo o 
                            código de seu pedido. Ele será algo com (ex.: #101). Precisamos dele para auxiliar a localização do seu 
                            produto.
                        </p>
                </div>
            </div>
        </>
    );
}

export default Rastrear;