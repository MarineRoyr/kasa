import React, {useState} from 'react';
import '../../assets/styles/App.scss';
import galleryData from '../../datas/appartments.json'; 
import ChevronNext from './ChevronNext';
import ChevronPrev from './chevronPrev';

const SlideShow = ({id}) => {
    const appartmentData = galleryData.find(appartment => appartment.id === id);
     const [count, setCount] = useState(0);
  if (!appartmentData) {
        return <div>Appartement non trouvé</div>;
    }
   const handleNext = () => {
    setCount(prevCount => (prevCount + 1) % appartmentData.pictures.length);
};

const handlePrev = () => {
    setCount(prevCount => (prevCount - 1 + appartmentData.pictures.length) % appartmentData.pictures.length);
};


return (
    <div className="slideShow">
        <div className="slideShowItem">
            <div className="slideShowPhoto">
                <img src={appartmentData.pictures[count]} alt={appartmentData.title} />
                <button onClick={handleNext}>
                    <ChevronNext />
                </button>
                <button onClick={handlePrev}>
                    <ChevronPrev />
                </button>
            </div>
        </div>
    </div>
);
};

export default SlideShow;