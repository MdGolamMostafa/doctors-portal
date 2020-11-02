import React from 'react';
import doctorSm from '../../../images/doctor-sm.png'
import Doctor from './Doctor';
const doctorInfo = [
    {
        image: doctorSm,
        name: 'Dr.Caudi',
        phone: '+0798351098'
    },
    {
        image: doctorSm,
        name: 'Dr.Caudi',
        phone: '+0728357098'
    },
    {
        image: doctorSm,
        name: 'Dr.Caudi',
        phone: '+0718357098'
    }
]

const Doctors = () => {
    return (
        <div>
            <div className = 'text-primary  text-center mb-5'>
                <h2 >Our Doctors</h2>
            </div>
            <div  className = 'd-flex justify-content-center  shadow rounded' >
                
                { 
                    doctorInfo.map( dInfo => <Doctor key= { dInfo.phone} dInfo = {dInfo}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;