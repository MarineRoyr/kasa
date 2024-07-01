import React, {useState} from 'react';
import '../../assets/styles/slideShow.scss';
import galleryData from '../../datas/appartments.json'; 
import ChevronNext from './chevronNext';
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


const showChevrons = appartmentData.pictures.length > 1


return (
    <div className="slideShow">
        <div className="slideShowItem">
            <div className="slideShowPhoto">
                <img src={appartmentData.pictures[count]} alt={appartmentData.title} />
                {showChevrons && (
                 <>
                <button className="chevronPrev" onClick={handlePrev}>
                    <ChevronPrev />
                </button>
                <button className="chevronNext" onClick={handleNext}>
                    <ChevronNext />
                </button>
                <div className="slideShowCounter">
                    {count + 1} / {appartmentData.pictures.length}
                </div>
              </>  )}
            </div>
        </div>
    </div>
);
};

export default SlideShow;