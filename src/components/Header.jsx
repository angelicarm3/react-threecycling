import React, {useState} from 'react';
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
            <button className='home-button'><img src={logo} alt='logo' className='logo' /></button>
            <div></div>
            <button className='my-products-button'>Mis Productos</button>
            <button className='log-button' onClick={handleToggle}>
                Ingresar
            </button>
            {toggle && <Login />}            
        </div>
    );
}

export default Header; 