import React from 'react';
import '../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import GalleryData from '../../datas/appartments.json'
import SlideShow from '../design-components/slideShow';



const Appartment = () => {

    const { id } = useParams();
    const appartmentData = GalleryData.find(GalleryData => GalleryData.id === (id));
   
    if (!appartmentData) {
        return <div>Appartement non trouvé</div>;
    }

    if (!appartmentData.pictures || appartmentData.pictures.length === 0) {
        return <div>Pas d'images disponibles pour cet appartement.</div>;
    }
    
    return (
        <main>
        <div>
            <h1>{appartmentData.title}</h1>
            <div className="appartmentImages">
            <SlideShow id={id} />
            </div> <h2>{appartmentData.title}</h2>
                        <p>{appartmentData.description}</p>
        </div>
        </main>
    );
};



export default Appartment;