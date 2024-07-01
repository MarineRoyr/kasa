import React from 'react';
import BannerImage from './bannerHomePage.png'
import '../../assets/styles/banner.scss'


const BannerHomePage = () => {
    return (
      <div className="bannerContainer">
      <img src={BannerImage} alt="Falaises au bord de l'eau" className="bannerImage" />
      <div className="bannerText">
          <p>Chez vous, partout et ailleurs</p>
      </div>
  </div>
    );
  };

  export default BannerHomePage