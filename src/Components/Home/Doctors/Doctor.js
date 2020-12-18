import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({dInfo}) => {
    const {name,image,phone} = dInfo;
    
    return (
            <div  className="text-center">
                <img className = 'img-fluid md-3'  src={image} alt=""/>
                <h4>Dr.Douildi</h4>
            
    <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {phone}</p>
            </div>
    
    );
};

export default Doctor;