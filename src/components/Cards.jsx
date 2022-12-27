import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function Cards(props) {

  return (
    <div className='card'>

        <img src={props.imageUrl} alt={props.title} />

        <div className='card-details'>
            <div className='location-details'>
                <p className='location'><FontAwesomeIcon className='location-icon' icon={faLocationDot}/>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            
            <h1 className='title'>{props.title}</h1>
            <div className='lower-details'>
                <p className='duration'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>    

    </div>
  )
  
}

export default Cards