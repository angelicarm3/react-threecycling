import React from 'react';
import '@styles/Signin.scss'
import Header from '../components/Header';
import Signinform from '../components/Signinform';

const Signin = () => {
    return (
        <div className='sign-in-page'>
            <Header />
            <Signinform />
        </div>
    );
}

export default Signin;