import React from 'react';
import '../assets/styles/footer.scss';
import logo from './design-components/logoFooter.png'

const Footer = () => {
    return (
 <footer>
  <div className='FooterContainer'>
    <div className='logoFooter'> <img src={logo} alt="logo" /></div>
  
   <p>© 2020 Kasa. All rights reserved</p>
      </div>

 </footer>
    );
  }

export default Footer 