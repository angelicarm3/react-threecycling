import React from 'react';
import '@styles/Categories.scss';
import plasticicon from '@icons/plasticicon.png';
import papericon from '@icons/papericon.png';
import electronicsicon from '@icons/electronicsicon.png';
import furnitureicon from '@icons/furnitureicon.png';
import aluminumicon from '@icons/aluminumicon.png';
import ironicon from '@icons/ironicon.png';

const Categories = () => {
    return (
        <div className='categories-dashboard'>
            <div className='category plastic'>
                <button className='category-button'>
                    <img src={plasticicon} alt='plástico' className='icon' />
                </button>
            </div>
            <div className='category paper-board'>
                <button className='category-button'>
                    <img src={papericon} alt='papel-cartón' className='icon' />
                </button>
            </div>
            <div className='category electronics'>
                <button className='category-button'>
                    <img src={electronicsicon} alt='electrónicos' className='icon' />
                </button>
            </div>
            <div className='category furniture'>
                <button className='category-button'>
                    <img src={furnitureicon} alt='muebles' className='icon' />
                </button>
            </div>
            <div className='category aluminum'>
                <button className='category-button'>
                    <img src={aluminumicon} alt='aluminio' className='icon' />
                </button>
            </div>
            <div className='category iron'>
                <button className='category-button'>
                    <img src={ironicon} alt='hierro' className='icon' />
                </button>
            </div>
        </div>
           
    );
}

export default Categories;