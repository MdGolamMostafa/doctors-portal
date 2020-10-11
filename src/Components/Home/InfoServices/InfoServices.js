import React from 'react';

const InfoServices = ({service}) => {
    const {title, image} = service;
    return (
        <div className = 'col-md-4 text-center '>
            <img style = {{height:'92px'}}src={image} alt=""/>
            <h2 className = 'mt-3 mb-3'>{title}</h2>
            <p className = 'text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, facere quas!</p>
        </div>
    );
};

export default InfoServices;