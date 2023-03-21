import NavLogo from '../componentes/Data/NavLogo.png';
import React from 'react';

function NavBar(){
    return(
        <nav className='navbar'>
            <div className='nav-div'><img src={NavLogo} alt="logo"/> <span>Futuras viagens.</span></div>
        </nav>
    )
}

export default NavBar;