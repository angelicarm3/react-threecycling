import React, {useState} from 'react';
import '@styles/Home.scss';
import Header from '@components/Header';
import Categories from '@components/Categories';

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Categories />
        </div>
    );
}

export default Home;