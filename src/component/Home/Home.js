import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Service from '../Service/Service';
import TouristGiurd from '../TouristGiurd/TouristGiurd';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Blogs></Blogs>
            <TouristGiurd></TouristGiurd>
        </div>
    );
};

export default Home;