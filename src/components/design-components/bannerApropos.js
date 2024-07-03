import React from 'react';
import BannerImage from './images/bannerApropos.png'
import '../../assets/styles/banner.scss'

const BannerApropos = () => {
    return (
      <div className="bannerContainer">
      <img src={BannerImage} alt="Montagnes et forêts" className="bannerImage" />
      <div className="bannerText">
      </div>
  </div>
    );
  };

  export default BannerApropos