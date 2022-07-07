import React from 'react';
import {Link} from 'react-router-dom';

const Editbutton = () => {
    return (
        <div>
            <div className='edit-button'>
                <Link to='/nuevo-item' className='link offers-link'>
                    <button className='primary-button'>Editar</button>
                </Link>
            </div>
        </div>
    );
}

export default Editbutton;