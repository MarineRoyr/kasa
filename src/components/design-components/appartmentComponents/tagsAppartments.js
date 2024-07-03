import React from 'react';
import '../../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import TagsData from '../../../datas/appartments.json'




const Tags = () => {

    const { id } = useParams();
    const TagData = TagsData.find(TagsData => TagsData.id === (id));
   
    if (!TagData) {
        return <div>Appartement non trouvé</div>;
    }
    
    return (

        <div className='tags'>
             {TagData.tags.map((tag, index) => (
                <div key={index} className='tag'>
                    {tag}
                </div>
            ))}
        </div>
        
    );
};



export default Tags;