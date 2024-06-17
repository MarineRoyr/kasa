import React from 'react';
import '../assets/styles/App.scss'
import { Link } from 'react-router-dom';
import galleryData from '../../src/datas/appartments.json'; 
import card from './design-components/card'

const Gallery = () => {
    return (
        <div className="gallery">
            {galleryData.map((appartments) => {
                // Sélectionnez le premier élément du tableau d'images
                const firstImage = appartments.pictures[0];
                return (
                    <div key={appartments.id} className="galleryItem">
                      <Link to ="/appartement"> <div className="galleryPhoto">
                            <img src={firstImage} alt={appartments.title} />
                            <p className="caption">{appartments.title}</p>
                        </div></Link> 
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery