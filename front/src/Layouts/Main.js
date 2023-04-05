import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import useScript from '../Services/Utils/useScripte';
import NavBar from './NavBar';
import Footer from './Footer';
import PublicRoutes from '../Router/PublicRoutes';
import Layout from './Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/style.css';
import '../Assets/plugins/swiper/css/swiper.min.css';
import '../Assets/plugins/fontawesome/css/fontawesome.min.css';
import '../Assets/plugins/fontawesome/css/all.min.css';
import '../Assets/js/slick.js';

// import script from '../Assets/js/script.js';

const Main = () => {
   // useScript('../Assets/js/script.js');
   

    return(
        <main className="App">
            <div className="main-wrapper">
            <PublicRoutes />
            {/* <Footer /> */}
            </div>
        </main>

    );
}
export default Main