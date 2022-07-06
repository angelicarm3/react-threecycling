import React from 'react';
import '@styles/Layout.scss';
import background from '@logos/background2.png';

const Layout = ({ children}) => {
    return (
        <div className='Layout' style={{ backgroundImage:`url(${background})`, backgroundRepeat:'repeat' }}>
            {children}
        </div>
    );
}

export default Layout;