import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Addproduct from '../pages/Addproduct';
import Sellerdashboard from '../pages/Sellerdashboard';
import Sellerdetail from '../pages/Sellerdetail';
import Buyerdetail from '../pages/Buyerdetail';
import NotFound from '../pages/NotFound';

import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} /> /*Buyerdashboard*/
                    <Route path='/registro' element={<Signin />} />
                    <Route path='/nuevo-item' element={<Addproduct />} />
                    <Route path='/mis-productos' element={<Sellerdashboard />} />
                    <Route path='/ofertas-producto' element={<Sellerdetail />} />
                    <Route path='/detalle-producto' element={<Buyerdetail />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>        
    );
}

export default App;