import React, { useEffect, useState } from 'react';
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

    const [doctors , setDoctors] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <div className = 'text-primary  text-center mb-5'>
                <h2>Our Doctors</h2>
            </div>
            <div  className = 'd-flex justify-content-center  shadow rounded' >
                
                { 
                    doctors.map(dInfo => <Doctor key= { dInfo._id} dInfo = {dInfo}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;