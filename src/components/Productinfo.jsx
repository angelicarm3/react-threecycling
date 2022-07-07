import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/Productinfo.scss';
import productimage from'@icons/TVChallenger32.jpg';

const Productinfo = () => {
    return (
        <div className='product-info'>
            <Link to='/ofertas-producto' className='link offers-link'>
                <button className='container-button offers-display'>
                    <div className="image">
                        <img src={productimage} alt='productimage' className='product-image' />
                    </div>
                    <div className="product-data">
                        <div className="product-name">TV CHALLENGER 32"</div>
                        <div className="product-description">Con tu TV CHALLENGER de pantalla de 32” en resolución HD, tendrás una imagen realista y precisa con el tamaño ideal. Aprovecha sus puertos de entrada para conectar tus dispositivos a través de HDMI y USB. Estrena en casa lo que siempre soñaste usa r¡¡ Que esperas, NO te quedes sin el tuyo!!</div>
                    </div>
                    <div>
                        <button className="offers">10</button>
                    </div>
                </button>
            </Link>
        </div>
    );
}

export default Productinfo;