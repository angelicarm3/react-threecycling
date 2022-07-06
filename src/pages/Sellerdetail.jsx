import React from 'react';
import '@styles/Sellerdetail.scss'
import Header from '../components/Header';
import Productdetail from '../components/Productdetail';
import Offers from '../containers/Offers';
import Editbutton from '../components/Editbutton';

const Sellerdetail = () => {
    return (
        <div className='seller-detail'>
            <Header />
            <div className="product-detail">                
                <Productdetail />
                <Offers />
                <Editbutton />
            </div>
        </div>
    );
}

export default Sellerdetail;