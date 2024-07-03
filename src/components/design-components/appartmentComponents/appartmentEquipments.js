import React from 'react';
import '../../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import Equipments from '../../../datas/appartments.json'
import '../../../assets/styles/appartment.scss'



const EquipmentsAppart = () => {

    const { id } = useParams();
    const Equipment = Equipments.find(Equipments => Equipments.id === (id));
   const EquipmentsList = Equipment.equipments
   const List = EquipmentsList.map((index)=> <p className='equipments' key={index} >{index}</p>)
   
    if (!Equipment) {
        return <div>Appartement non trouvé</div>;
    }
    
    return (

        <div >
            {List}
        </div>
        
    );
};



export default  EquipmentsAppart;