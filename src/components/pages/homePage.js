import React from 'react';
import BannerHomePage from '../design-components/bannerHomePage'
import Gallery from '../gallery'
import '../../assets/styles/App.scss';


const HomePage = () => {
    return (
      <main>
        <BannerHomePage/>
        <Gallery/>
      </main>
    );
  };
  
  export default HomePage;