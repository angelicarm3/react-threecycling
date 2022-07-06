import React from 'react';
import '@styles/Myproducts.scss';
import Productinfo from '@components/Productinfo';


const Myproducts = () => {
    return (
        <div className='container my-products'>
            <h1 className='title'>MIS PRODUCTOS</h1>
            <div className="new-button">
                <button className='primary-button'>Agregar Nuevo</button>
            </div>
            <Productinfo />
            <Productinfo />
            <Productinfo />
            <Productinfo />
            <Productinfo />
            <Productinfo />
        </div>
    );
}

export default Myproducts;