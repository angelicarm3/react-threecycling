import React from 'react';
import '@styles/Buyerdetail.scss'
import Header from '../components/Header';
import Productdetail from '../components/Productdetail';
import Makeoffer from '../components/Makeoffer';

const Buyerdetail = () => {
    return (
        <div className='buyer-detail'>
            <Header />
            <div className="product-detail">
                <Productdetail />
                <Makeoffer />
            </div>
        </div>
    );
}

export default Buyerdetail;