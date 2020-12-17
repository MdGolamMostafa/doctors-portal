import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import InfoServices from '../InfoServices/InfoServices';

const serviceInfo =[
    {
        title: 'Fluoride Treatment',
        image:fluoride
    },
    {
        title: 'Cavity Filling',
        image:cavity
    },
    {
        title: 'Teat Whitening',
        image:teath
    }
]

const Services = () => {
    return (
        <section className = "services-container  ">
            <div className= 'text-center mt-5 mb-5'>
                <h5 style= {{color: '#1cc7c1'}}>OUR SERVICES</h5>
                    <h2 style= {{color: '#5b6273'}}>Services We Provide</h2>
            </div>

            <div className = "d-flex justify-content-center">
                <div className = " w-75  row mt-5 mb-5 shadow ">
                    {
                        serviceInfo.map((service) => <InfoServices  key={service.title} service={service}></InfoServices>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;