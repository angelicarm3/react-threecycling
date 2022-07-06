import React from 'react';
import '@styles/Productdisplay.scss'
import productimage from '@icons/TVChallenger32.jpg'

const Productdisplay = () => {
    return (
        <div className='product-display'>
            <div className='image-container'>
                <img src={productimage} alt='TVChallenger32.jpg' className='product-image'/>
            </div>
            <div className='info-product'>
                <div className='product-name'>TV CHALLENGER 32"</div>
                <div className="product-description">Con tu TV CHALLENGER de pantalla de 32” en resolución HD, tendrás una imagen realista y precisa con el tamaño ideal. Aprovecha sus puertos de entrada para conectar tus dispositivos a través de HDMI y USB. Estrena en casa lo que siempre soñaste usa r¡¡ Que esperas, NO te quedes sin el tuyo!!</div>
            </div>
            <div className='estimated-value'>$59.000</div>
        </div>
    );
}

export default Productdisplay;