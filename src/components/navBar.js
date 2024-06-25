
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss'
import Logo from './design-components/logo'



const NavBar = () => {
    return (<div className='NavBar'>
<Logo/>
<nav>
 <ul>
   <li><Link to="/">Accueil</Link></li>
   <li><Link to="/a-propos">A Propos</Link></li>
 </ul>
</nav>
</div>)}

export default NavBar