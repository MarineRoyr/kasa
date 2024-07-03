import React from 'react';
import '../../assets/styles/gallery.scss'
import { Link } from 'react-router-dom';
import galleryData from '../../datas/appartments.json'; 
import Card from './card'

const Gallery = () => {
    return (
        <div className="gallery">
            {galleryData.map((appartments) => {
                const firstImage = appartments.pictures[0];
                return (
                    <div key={appartments.id} className="galleryItem">
                      <Link to={`/appartement/${appartments.id}`}> <div className="galleryPhoto">

                      <Card     key={appartments.id}     
                                imagePath={firstImage}              
                                caption={appartments.title} />
                            
                             </div>
                        </Link> 
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery