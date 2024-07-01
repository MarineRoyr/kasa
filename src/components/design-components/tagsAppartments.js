import React from 'react';
import '../../assets/styles/App.scss';
import { useParams } from 'react-router-dom';
import TagsData from '../../datas/appartments.json'




const Tags = () => {

    const { id } = useParams();
    const TagData = TagsData.find(TagsData => TagsData.id === (id));
   
    if (!TagData) {
        return <div>Appartement non trouvé</div>;
    }
    
    return (

        <div>
             {TagData.tags.map((tag, index) => (
                <span key={index} className='tag'>
                    {tag}
                </span>
            ))}
        </div>
        
    );
};



export default Tags;