import React from 'react'
import reactLogo from '../componentes/imagens/logo2.png'

function Navbar(){
    return(
            <nav className='nav'>
                <img className="nav-logo" src={reactLogo} alt="LOGO"></img>
                <h3>React Course - Project 1</h3>
            </nav>
    );
}

export default Navbar;