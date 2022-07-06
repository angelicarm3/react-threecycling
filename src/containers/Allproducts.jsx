import React from 'react';
import '@styles/Allproducts.scss'
import Productdisplay from '../components/Productdisplay'

const Allproducts = () => {
    return (
        <div className='container products-container'>
            <h1 className='title'>CATEGORIA</h1>
            <div className='products-display'>
                <Productdisplay />
                <Productdisplay />
                <Productdisplay />
                <Productdisplay />
                <Productdisplay />
                <Productdisplay />
                <Productdisplay />
            </div>
        </div>
    );
}

export default Allproducts;