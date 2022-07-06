import React from 'react'
import '@styles/Login.scss'

const Login = () => {
    return (
        <div className='container log-in'>
            <form action="/" className="log-in-form">
                <label htmlFor='email' className='label'>Correo electrónico</label>
                <input type='email' id='email' placeholder='hola@correo.com' className='input input-email' required />
                <label htmlFor='password' className='label'>Contraseña</label>
                <input type='password' id='password' placeholder='********' className='input input-password' required />
                <div className='log-in-button'>
                        <input type='submit' value='Aceptar' className='primary-button' />
                </div>
            </form>
            <div className='sign-in-link'>Si no tienes una cuenta 
                <button className='terciary-button'>
                    Registrate
                </button>
            </div>
        </div>
    );
}

export default Login;