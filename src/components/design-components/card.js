import React from 'react';
import '../../assets/styles/gallery.scss';



const Card = ({imagePath, caption}) => {
  
    return (
        <div className="card">
         <div className="galleryPhoto">
                <img src={imagePath} alt={caption} />
            </div>
            <h2 className="caption">{caption}</h2>
        </div>
    );
};

export default Card;