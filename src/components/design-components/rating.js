import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/appartment.scss'

function Rating ({rating}){

    const stars = Array.from({length: 5}).map((_, index)=> (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      style={{ width :30,
        height:30,
        color: index < rating ? '#ff6060' : '#e3e3e3' }}
    />
    ))
    return(
        <>
            {stars}
        </>
    )
}

export default Rating;