import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/App.scss';
import Footer from './footer'
import NavBar from './navBar'




const Layout = () => {
  return (
    <div>
        <main className='mainContent'>
    <NavBar/>
      <Outlet />
    </main>
    <div>
      <Footer/>
      </div>
   </div>
  );
}



export default Layout;