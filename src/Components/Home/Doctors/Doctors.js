import React, { useEffect, useState } from 'react';
import doctorSm from '../../../images/doctor-sm.png'
import Doctor from './Doctor';
import loadingPic from './unnamed-1.gif';
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
    const [loading,setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div className = 'container'>
            <div className = 'text-primary  text-center mb-5'>
                <h2>Our Doctors</h2>
            </div>(
            <div>
                {(loading === false ? (
                    <div  className = 'row' >
                        { 
                            doctors.map(dInfo => <Doctor key= { dInfo._id} dInfo = {dInfo}></Doctor>)
                        }
                    </div>

                ):(
                    

                    <div  className ='row'>
                        { 
                            doctorInfo.map(dInfo => <Doctor key= {dInfo._id} dInfo = {dInfo}></Doctor>)
                        }
                    </div>

                ) )}
            </div>

            
        </div>
    );
};

export default Doctors;