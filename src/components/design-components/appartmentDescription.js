import React from 'react';
import '../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import Description from '../../datas/appartments.json'




const DescriptionAppart = () => {

    const { id } = useParams();
    const DescriptionData = Description.find(Description => Description.id === (id));
   
    if (!DescriptionData) {
        return <div>Appartement non trouvé</div>;
    }
    
    return (

        <div>
            {DescriptionData.description}
        </div>
        
    );
};



export default DescriptionAppart;