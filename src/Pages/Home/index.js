import React from 'react'
import bulovaVideo from '../../assets/bulova_matheus.mp4'
import CardRelogio from '../../Components/CardRelogio';

import './style.css'

import Esqueleto from '../../assets/Bulova/Azul/esqueleto/esqueleto.jpg'
import Marine from '../../assets/Bulova/Azul/marine/Bulova_Marine.jpg'
import Curv from '../../assets/Bulova/preto/curv/Bulova_Curv.jpg'
import EsqueletoPrata from '../../assets/Bulova/prata/esqueleto-prata/esqueleto-prata.jpg'

        
const Home = () =>{
    return(
        <>
            <section className="background-video">
                <div className="d-flex justify-content-center">
                    <video class="video" controls muted loop src={bulovaVideo} type="video/mp4"></video>  
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row">
                        <h2 className="d-flex justify-content-center">Mais Vendidos</h2>
                        <CardRelogio image={Esqueleto} valor="3.511,99" />     
                        <CardRelogio image={Marine} valor="4.490,00" />            
                        <CardRelogio image={Curv} valor="5.711,20" />                                     
                        <CardRelogio image={EsqueletoPrata} valor="3.591,00" />  
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;