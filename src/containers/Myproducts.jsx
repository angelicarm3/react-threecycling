import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/Myproducts.scss';
import Productinfo from '@components/Productinfo';


const Myproducts = () => {
    return (
        <div className='container my-products'>
            <h1 className='title'>MIS PRODUCTOS</h1>
            <div className="new-button">
                <Link to='/nuevo-item' className='link offers-link'>
                    <button className='primary-button'>Agregar Nuevo</button>
                </Link>
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