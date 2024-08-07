import React from 'react';
import '../../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import Location from '../../../datas/appartments.json'




const LocationAppart = () => {

    const { id } = useParams();
    const LocationData = Location.find(Location => Location.id === (id));

    if (!LocationData) {
        return <div>Appartement non trouvé</div>;
    }

    return (

        <div>
        <h3 className='location'>
        { LocationData.location }
        </h3>
        </div>
    )
}



export default LocationAppart;