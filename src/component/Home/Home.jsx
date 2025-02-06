import React from 'react';
import CardSlider from '../cardSlider/cardSlider';
import './home.css';
import img1 from '../../assets/growingSeedling.jpg';

const Home = () => {
    return (
        <div className="container-fluid home-component">
            <div className="content">
                <CardSlider />
            </div>
            <div className="content">
                <img src={img1} className="home-img img-fluid" alt="Growing Seedling" />
            </div>
        </div>
    );
};

export default Home;
