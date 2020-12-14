import React from 'react';
import Appointment from '../MakeAppointment/MakeAppointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <DentalCare/>
            <Appointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;