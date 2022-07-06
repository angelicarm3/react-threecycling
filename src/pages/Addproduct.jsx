import React from 'react';
import '@styles/Addproduct.scss';
import Header from '../components/Header';
import Addproductform from '../components/Addproductform';

const Addproduct = () => {
    return (
        <div className='add-product-page'>
            <Header />
            <Addproductform />
        </div>
    );
}

export default Addproduct;