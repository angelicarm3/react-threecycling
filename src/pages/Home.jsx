import React, {useState} from 'react';
import '@styles/Home.scss';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Categoriesbutton from '../components/Categoriesbutton';
import Allproducts from '../containers/Allproducts';

const Home = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='home-page'>
            <Header />
            <Categories onClick={handleToggle} />
            {!toggle && <Categories />}           
            <Allproducts />
        </div>
    );
}

export default Home;