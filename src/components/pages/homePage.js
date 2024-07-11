import React from 'react';
import Banner from '../design-components/banner'
import BannerImage from '../design-components/images/bannerHomePage.png'
import Gallery from '../design-components/gallery'
import '../../assets/styles/App.scss';


const HomePage = () => {
    return (
      <div>
        <Banner image={BannerImage} txt={"Chez vous, partout et ailleurs"} > </Banner>
        <Gallery/>
      </div>
    );
  };
  
  export default HomePage;