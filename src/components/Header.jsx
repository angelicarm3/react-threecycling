import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '@styles/Header.scss'
import logo from '@logos/logoall.png';
import Login from '@components/Login';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='header-bar'>
            <Link to='/'>
                <button className='home-button'><img src={logo} alt='logo' className='logo' /></button>
            </Link>
            <div></div>
            <Link to='/mis-productos'>
                <button className='my-products-button'>Mis Productos</button>
            </Link>    
            <button className='log-button' onClick={handleToggle}>
                Ingresar
            </button>
            {toggle && <Login />}            
        </div>
    );
}

export default Header; 