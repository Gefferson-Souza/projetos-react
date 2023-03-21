import React from 'react';
import airbnb from './imagens/airbnb.png'
import fotoHeader from './imagens/Group 77.png'

function Navbar(){
    return (
        <div className="container">
            <nav className='navbar'>
                <img className='navbar-logo' src={airbnb} alt="logo" />
            </nav>
            <header className='header'>
                <img className='header-photo' src={fotoHeader} alt="IMG" />
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by on-of-a-kind
                    hosts--all without leaving home.
                </p>

            </header>
        </div>
    );
}

export default Navbar;