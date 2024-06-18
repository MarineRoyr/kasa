import React from 'react';
import BannerHomePage from '../design-components/banner'
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