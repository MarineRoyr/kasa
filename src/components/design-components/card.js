import React from 'react';
import '../../assets/styles/App.scss';



const Card = ({imagePath, caption}) => {
  
    return (
        <div className="card">
         <div className="galleryPhoto">
                <img src={imagePath} alt={caption} />
            </div>
            <p className="caption">{caption}</p>
        </div>
    );
};

export default Card;