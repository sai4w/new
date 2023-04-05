import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verify } from '../Services/Actions/auth';

const ActivateAccount = () => {
    const dispatch = useDispatch();
    const [verified, setVerified] = useState(false);
    const { uid, token } = useParams();
    const navigate = useNavigate();
    const verify_account = (e) => {
        const formData = new FormData();
        formData.append('uid', uid);
        formData.append('token', token);
        dispatch(verify(formData, () => setVerified(true)));  
    };

    if (verified) {
        navigate('/');
    }

    return (
        
        <>
            <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Account</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Activation</h2>
                            </div>
                        </div>
                    </div>
            </div>
            <br/>
            <br/>
            <br/>

            <div className='row justify-content-center align-items-center'>
                <h1>Verify your Account:</h1>
                <br/>
                <div className='col-4'>
                    <button
                        onClick={verify_account}
                        type='button'
                        className="btn btn-block btn-outline-success"
                    >
                        Verify
                    </button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
            
        </>
    );
};

export default ActivateAccount;
