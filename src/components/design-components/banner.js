import React from 'react';
import '../../assets/styles/banner.scss'


const Banner = ({image, txt}) => {
    return (
      <div className="bannerContainer"> 
      <div className="bannerImage"> 
        <img src={image} alt="bannière, paysage nature"/> </div>
      <div className="bannerText">
          <p>{txt}</p>
      </div>
  </div>
    );
  };

  export default Banner