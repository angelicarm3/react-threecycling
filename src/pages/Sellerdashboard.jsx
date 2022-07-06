import React from 'react';
import '@styles/Sellerdashboard.scss';
import Header from '@components/Header';
import Myproducts from '@containers/Myproducts';

const Sellerdashboard = () => {
    return (
        <div className='seller-dashboard'>
            <Header />
            <Myproducts />
        </div>
    );
}

export default Sellerdashboard;