import React from 'react';
import '../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import GalleryData from '../../datas/appartments.json'

const Appartment = () => {

    const { id } = useParams();
    const appartmentData = GalleryData.find(GalleryData => GalleryData.id === (id));
   
    if (!appartmentData) {
      return <div>Appartement non trouvé</div>;
  }
    return (
        <main>
        <div>
            <h1>{appartmentData.title}</h1>
            <div className="appartmentImages">
            
            </div> <h2>{appartmentData.title}</h2>
                        <p>{appartmentData.description}</p>
        </div>
        </main>
    );
};



export default Appartment;