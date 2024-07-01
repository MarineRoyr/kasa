import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/appartment.scss'

function Rating ({rating}){

    const stars = Array.from({length: 5}).map((_, index)=> (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={`star-icon ${index < rating ? 'filled' : 'empty'}`}
    />
    ))
    return(
        <>
            {stars}
        </>
    )
}

export default Rating;