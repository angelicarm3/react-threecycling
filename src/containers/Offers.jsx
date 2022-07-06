import React from 'react'
import Offerinfo from '../components/Offerinfo';
import '../styles/Offers.scss'

const Offers = () => {
    return (
        <div className='offers-detail-seller'>
            <div className='container offers-detail'>
                <h1 className='title'>OFERTAS</h1>
                <Offerinfo />
                <Offerinfo />
                <Offerinfo />
            </div>
        </div>
    );
}

export default Offers;