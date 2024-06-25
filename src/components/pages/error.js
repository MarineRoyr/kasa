import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/App.scss';
import '../../assets/styles/error.scss';
import Footer from '../footer';
import NavBar from '../navBar';

const Error = () => {
  return (
    <div>
      <NavBar/>
    <div className='Error'>
      <h2 className='Error404'>404</h2>
      <p className='ErrorTxt'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d’accueil</Link>
      
   
    </div>  <Footer/></div>
  );
};

export default Error;