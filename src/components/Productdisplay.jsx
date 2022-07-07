import React from 'react';
import {Link} from 'react-router-dom';
import '@styles/Productdisplay.scss'

const Productdisplay = ({product}) => {
    return (
        <div className='display-product'>
            <Link to='/detalle-producto' className='link detail-link'>
                <button className='container-button product'>
                    <div className='image-container'>
                        <img src={product.images[0]} alt={product.title} className='product-image' />
                    </div>
                    <div className='info-product'>
                        <div className='product-name'>{product.title}</div>
                        <div className="product-description">{product.description}</div>
                    </div>
                    <div className='estimated-value'>${product.price}</div>
                </button>
            </Link>
        </div> 
    );
}

export default Productdisplay;