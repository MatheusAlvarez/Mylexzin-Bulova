import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const NavBar = () =>{
    return(
        <>
            <div className="background-color">
                <div className="d-flex justify-content-center">
                    <h1 className="logo">Mylexzin</h1>
                </div>
                <div className="d-flex justify-content-center menu-navegation">
                    <Link className="menu-navegation" to="/">
                    <p className="margin-navegation">Inicio</p>
                    </Link>

                    <Link className="menu-navegation" to="/loja">
                    <p className="margin-navegation">Loja</p>
                    </Link>

                    <Link className="menu-navegation" to="/sobre">
                    <p className="margin-navegation">Sobre</p>
                    </Link>
                    
                    <Link className="menu-navegation" to="/contato">
                    <p className="margin-navegation">Contato</p>
                    </Link>

                </div>

            </div>
        </>
    );
}

export default NavBar;