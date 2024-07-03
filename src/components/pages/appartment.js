import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/styles/appartment.scss';
import GalleryData from '../../datas/appartments.json';
import SlideShow from '../../components/design-components/appartmentComponents/slideShow';
import Tag from '../../components/design-components/appartmentComponents/tagsAppartments';
import Location from '../../components/design-components/appartmentComponents/appartmentLocation';
import Description from '../../components/design-components/appartmentComponents/appartmentDescription';
import EquipmentsAppart from '../../components/design-components/appartmentComponents/appartmentEquipments';
import Host from '../../components/design-components/appartmentComponents/host';
import RatingAppart from '../../components/design-components/appartmentComponents/rating';
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
                    <h2>{appartment.title}</h2>
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