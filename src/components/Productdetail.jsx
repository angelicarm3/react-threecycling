import React from 'react';
import '@styles/Productdetail.scss'
import productimage from'@icons/TVChallenger32.jpg';

const Productdetail = () => {
    return (
        <div className='container detail'>
            <h1 className='title'>TV CHALLENGER 32"</h1>
            <div className='left-box'>
                <div className='image'>
                    <img src={productimage} alt='productimage' className='detail-image' />
                </div>
                <div className='detail-value'>$59.000</div>
                <div className='detail-description'>Con tu TV CHALLENGER de pantalla de 32” en resolución HD, tendrás una imagen realista y precisa con el tamaño ideal. Aprovecha sus puertos de entrada para conectar tus dispositivos a través de HDMI y USB. Estrena en casa lo que siempre soñaste usa r¡¡ Que esperas, NO te quedes sin el tuyo!!</div>
            </div>
        </div>
    );
}

export default Productdetail;