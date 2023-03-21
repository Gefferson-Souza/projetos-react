import TrollFace from './imagens/TrollFace.png'
import React from 'react';


function NavBar(props){
    return (
        <nav className='navbar'>
            <div className='navbar-div-logo'><img className='navbar-img-logo' src={TrollFace} alt='HUE' /> Meme Generator</div>
            <div className='navbar-projeto'>React Course - Projeto 3</div>           
        </nav>
    )
}

export default NavBar;