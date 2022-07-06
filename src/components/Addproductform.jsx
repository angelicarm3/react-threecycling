import React from 'react';
import '../styles/Addproductform.scss';
import uploadicon from '@icons/uploadimage2.png'

const Addproductform = () => {
    return (
        <div className='container upload-container'>
            <h1 className='title'>Nuevo Producto</h1>
            <form action='/' className='product-form'>
                <div className='form left-div'>
                    <label htmlFor='product-name' className='label'>Nombre del producto</label>
                    <input type='text' id='product-name' placeholder='Ingrese el nombre de su producto' className='input input-product-name' required />
                    <label htmlFor='product-description' className='label'>Descripción del producto</label>
                    <input type='text' id='product-description' placeholder='Describa su producto' className='input input-product-description' required />
                    <label htmlFor='estimated-value' className='label'>Valor estimado</label>
                    <input type='number' id='estimated-value' placeholder='Ingrese valor en numeros' className='input input-estimated-value' required />
                    <label htmlFor='category' className='label'>Categoría</label>
                    <select id="category" name="category">
                        <option value="">Seleccione una categoría</option>
                        <option value="plastic">Plástico</option>
                        <option value="paper-board">Papel/Cartón</option>
                        <option value="electronics">Electrónicos</option>
                        <option value="furniture">Muebles</option>
                        <option value="aluminum">Aluminio</option>
                        <option value="iron">Hierro</option>
                    </select>
                </div>
                <div className='form rigth-div'>
                    <h4>Imagen</h4>
                    <div className='input drop-container'>Arrastre la imagen
                        <div className='icon'>
                            <img src={uploadicon} alt='uploadimage' className='upload-icon' />
                        </div>
                    </div>
                    <div className='browse-image'>
                        <label htmlFor='product-image' className='upload-button'>Seleccione la imagen</label>
                        <input type='file' id='product-image' className='input-product-image' />
                    </div>
                </div>
                <div className='save-button'>
                    <input type='submit' value='Guardar' className='primary-button' />
                </div>
            </form>
        </div>
    );
}

export default Addproductform;