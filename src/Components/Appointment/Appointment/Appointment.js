import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Common/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())

    const handleChangeDate = (date) => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar/>
                <AppointmentHeader handleChangeDate = {handleChangeDate}></AppointmentHeader>
                <BookAppointment  date = {selectedDate}></BookAppointment>
            <Footer/>
        </div>
    );
};

export default Appointment;