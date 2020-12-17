import React from 'react'; 
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarker,faClock,faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        name: 'Opening Hours', 
        description: 'We are opening 7 days',
        background:'primary',
        icon: faClock
    },
    {
        name: 'Visit Our location', 
        description: 'Brooklyn,NY 24344 USA',
        background:'dark',
        icon: faMapMarker
    },
    {
        name: 'Call us now', 
        description: '+0798357098',
        background:'primary',
        icon: faPhone
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className  = "w-75 row mb-5">
                {
                    infoData.map(info => <InfoCard key = { info.name } info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;