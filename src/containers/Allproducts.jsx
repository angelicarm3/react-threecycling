import React from 'react';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/Allproducts.scss';
import Productdisplay from '@components/Productdisplay';

const API = 'https://api.escuelajs.co/api/v1/products';

const Allproducts = () => {
    const products = useGetProducts(API);

    return (
        <div className='container products-container'>
            <h1 className='title'>CATEGORIA</h1>
            <div className='products-display'>
                {products.map(product => (
                    <Productdisplay product={product} key={product.id} />
                ))}                
            </div>
        </div>
    );
}

export default Allproducts;