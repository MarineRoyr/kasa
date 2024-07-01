import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/styles/appartment.scss';
import GalleryData from '../../datas/appartments.json';
import SlideShow from '../design-components/slideShow';
import Tag from '../design-components/tagsAppartments';
import Location from '../design-components/appartmentLocation';
import Description from '../design-components/appartmentDescription';
import EquipmentsAppart from '../design-components/appartmentEquipments';
import Host from '../design-components/host';
import RatingAppart from '../design-components/rating';
import Collapse from '../design-components/sectionDesign';


const Appartment = () => {
  
    const { id } = useParams();
    const navigate = useNavigate();
    const [appartment, setAppartment] = useState(null); 

    useEffect(() => {
  
      const appartmentData = GalleryData.find(item => item.id === id);

      if (!appartmentData) {
        navigate('/error');
      } else {
        setAppartment(appartmentData);
      }
    }, [id, navigate]); 
   
    if (!appartment) {
      return 'Chargement...';
    }

    return (
        <div className='appartmentPage'>
            <div className='appartmentPageSlideShow'>
                <SlideShow id={id} />
            </div>
            <div className='appartmentInfos'>
                <div className='appartmentInfosLeft'>
                    <h1>{appartment.title}</h1>
                    <div className='location'><Location id={id} /></div> 
                    <div ><Tag id={id} /></div>
                </div>
                <div className='appartmentInfosRight'>
                    <div><Host id={id} /></div>
                    <div className='rate'><RatingAppart rating={appartment.rating} /></div>
                </div>
            </div>
            <div className='appartmentDescription'>
                <Collapse Title="Description">
                    <div className='divDescription'><Description id={id} /></div>
                </Collapse>
                <Collapse Title="Equipements">
                    <div className='divEquipments'><EquipmentsAppart id={id} /></div>
                </Collapse>
            </div>
        </div>
    );
};

export default Appartment;