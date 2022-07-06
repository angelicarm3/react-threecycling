import React from 'react';
import '../styles/Signinform.scss';

const Signinform = () => {
    return (
        <div className='container form-container'>
            <h1 className='title'>Regístrate</h1>
            <p className='subtitle'>Ingresa tus datos</p>
            <form action='/' className='sign-in-form'>
                <label htmlFor='name' className='label'>Nombre</label>
                <input type='text' id='name' placeholder='Escribe tu nombre' className='input input-name' required />
                <label htmlFor='email' className='label'>Correo electrónico</label>
                <input type='email' id='email' placeholder='hola@correo.com' className='input input-email' required />
                <label htmlFor='phone' className='label'>Celular</label>
                <input type='tel' id='phone' placeholder='3003213211' className='input input-phone' pattern="[3, 6]{1}[0-9]{9}" required />
                <label htmlFor='password' className='label'>Contraseña</label>
                <input type='password' id='password' placeholder='********' className='input input-password' required />
                <label htmlFor='confirm-password' className='label'>Confirma tu contraseña</label>
                <input type='password' id='confirm-password' placeholder='********' className='input input-confirm-password' required />
                <div className='sign-in-button'>
                    <input type='submit' value='Enviar' className='primary-button' />
                </div>
            </form>
        </div>
    );
}

export default Signinform;