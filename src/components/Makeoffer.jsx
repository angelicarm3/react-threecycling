import React from 'react';
import '../styles/Makeoffer.scss';

const Makeoffer = () => {
    return (
        <div className='send-offer-buyer'>
            <div className='container send-offer'>
                <h1 className='title'>Hacer una oferta</h1>
                <form action='/' className='form send-offer-div'>
                    <label htmlFor='value' className='label'></label>
                    <input type='number' id='value' placeholder='Ingrese valor en numeros' className='input input-new-offer' required/>
                    <div className='send-button'>
                        <input type='submit' value='Enviar' className='primary-button' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Makeoffer;