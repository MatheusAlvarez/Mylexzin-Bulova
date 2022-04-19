import React from 'react'

import CurvPreto from '../../assets/Bulova/preto/curv/Bulova_Curv.jpg'
import ClassicPreto from '../../assets/Bulova/preto/classic/classic.jpg'
import StarPreto from '../../assets/Bulova/preto/star/star.jpg'
import preciPreto from '../../assets/Bulova/preto/precisionist/precisionist.jpg'

import Esqueleto from '../../assets/Bulova/Azul/esqueleto/esqueleto.jpg'
import Marine from '../../assets/Bulova/Azul/marine/Bulova_Marine.jpg'
import Marine2 from '../../assets/Bulova/Azul/marine2/marine2.jpg'
import preciAzul from '../../assets/Bulova/Azul/precisionist/precisionist.jpg'

import EsqueletoPrata from '../../assets/Bulova/prata/esqueleto-prata/esqueleto-prata.jpg'
import Esqueleto2Prata from '../../assets/Bulova/prata/esqueleto2/esqueleto2.jpg'
import PreciPrata from '../../assets/Bulova/prata/precisionist-cronografo/precisionist-cronografo.jpg'
import ClasPrata from '../../assets/Bulova/prata/classic/classic-prata.jpg'

import CardRelogio from '../../Components/CardRelogio'

import GitHub from '../../assets/propaganda.jpeg'

const Loja = () =>{
    return(
        <>
            <section className="">
                <div className="container">
                    <div className="row">
                        <h2 className="d-flex justify-content-center mt-3 mb-3">Relógios</h2>

                        {/* Coluna 1 */}          
                            <CardRelogio image={CurvPreto} valor="5.711,20" />                                      
                            <CardRelogio image={ClassicPreto} valor="2.421.00" />                                      
                            <CardRelogio image={StarPreto} valor="3.141,00" />                                      
                            <CardRelogio image={preciPreto} valor="5.391,00" />    
                        {/* Fim Coluna 1 */}

                        {/* Coluna 2 */}          
                            <CardRelogio image={Esqueleto} valor="3.511,99" />                                                                               
                            <CardRelogio image={Marine} valor="4.490,00" />                                      
                            <CardRelogio image={preciAzul} valor="5.841,00" />  
                            <CardRelogio image={Marine2} valor="2.961,00" />    
                        {/* Fim Coluna 2 */}

                        {/* Coluna 3 */}  
                            <CardRelogio image={EsqueletoPrata} valor="3.591,00" />  
                            <CardRelogio image={Esqueleto2Prata} valor="2.999,99" />  
                            <CardRelogio image={PreciPrata} valor="4.200,00" />  
                            <CardRelogio image={ClasPrata} valor="1.499,99" />  
                        {/* Fim Coluna 3 */}

                        <img src={GitHub} alt="GitHub" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Loja;