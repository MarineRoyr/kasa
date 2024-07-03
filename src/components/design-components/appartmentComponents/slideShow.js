import React, {useState, useRef, useEffect, useCallback} from 'react';
import '../../../assets/styles/slideShow.scss'
import galleryData from '../../../datas/appartments.json'; 
import ChevronNext from '../icons/chevronNext';
import ChevronPrev from '../icons/chevronPrev';
import Error from '../../pages/error'

const SlideShow = ({ id }) => {
    // Déclaration des hooks
    const [count, setCount] = useState(0);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
  
    const appartmentData = galleryData.find(appartment => appartment.id === id);
 
 
    const handleNext = useCallback(() => {
        setCount(prevCount => (prevCount + 1) % appartmentData.pictures.length);
      },[appartmentData.pictures.length]);
    
      const handlePrev = useCallback(() => {
        setCount(prevCount => (prevCount - 1 + appartmentData.pictures.length) % appartmentData.pictures.length);
      },[appartmentData.pictures.length]);


  
    useEffect(() => {
      const prevButton = prevButtonRef.current;
      const nextButton = nextButtonRef.current;

    
  
      if (prevButton && nextButton) {
        prevButton.addEventListener('click', handlePrev);
        nextButton.addEventListener('click', handleNext);
  
        // Fonction de nettoyage pour retirer les écouteurs d'événements
        return () => {
          prevButton.removeEventListener('click', handlePrev);
          nextButton.removeEventListener('click', handleNext);
        };
      }
    }, [appartmentData, handlePrev, handleNext]);
  
    if (!appartmentData) {
      return <div> <Error/></div>;
    }
  
    const showChevrons = appartmentData.pictures.length > 1;
  
    return (
      <div className="slideShow">
        <div className="slideShowItem">
          <div className="slideShowPhoto">
            <img src={appartmentData.pictures[count]} alt={appartmentData.title} />
            {showChevrons && (
              <>
                <button className="chevronPrev" ref={prevButtonRef}>
                  <ChevronPrev />
                </button>
                <button className="chevronNext" ref={nextButtonRef}>
                  <ChevronNext />
                </button>
                <div className="slideShowCounter">
                  {count + 1} / {appartmentData.pictures.length}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SlideShow;