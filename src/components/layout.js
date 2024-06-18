import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../assets/styles/App.scss';
import Logo from './design-components/logo'
import Footer from './footer'




const Layout = () => {
  return (
    <div>
        <main className='mainContent'>
      <div className='NavBar'>
       <Logo/>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">A Propos</Link></li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </main>
    <div>
      <Footer/>
      </div>
   </div>
  );
}



export default Layout;