import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Services/>
            <ExceptionalDental/>
            <AppointmentBanner/>
            <Contact/>
        </div>
    );
};

export default Home;