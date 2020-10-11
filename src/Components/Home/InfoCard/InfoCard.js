import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({info}) => {
    const {icon,name, description,background} = info;
    return (
        <div className = "col-md-4 text-white  info-card">
            <div className = {`d-flex justify-content-center info-container  info-${background}`}>
                <div>
                <FontAwesomeIcon className = 'info-text mr-3' icon={icon} />
                </div>
                <div>   
                    <h6>{name}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;