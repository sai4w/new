
import React, { useEffect } from 'react';
import NavBar from './Admin/NavBar';
import { connect } from 'react-redux';
import { load_user } from '../Services/Actions/auth';

const Layout = ({ load_user, children }) => {
    useEffect(() => {
        load_user();
    }, []);

    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};



export default connect(null, { load_user })(Layout);
