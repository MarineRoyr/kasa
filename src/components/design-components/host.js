import React from 'react';
import '../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import Hosts from '../../datas/appartments.json'




const HostAppart = () => {

    const { id } = useParams();
    const Host = Hosts.find(Hosts => Hosts.id === (id));
   
    if (!Host) {
        return <div>Appartement non trouvé</div>;
    }
    
    return (
        <div className='host'> <div className='hostName'>{Host.host.name}</div>
       <div><img className='hostPhoto' src={Host.host.picture}  alt={Host.host.name}></img></div> 
         
        </div>
        
    );
};



export default  HostAppart;