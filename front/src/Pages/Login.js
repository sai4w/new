import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Services/Actions/auth';
import axios from 'axios';

import login_banner from "../Assets/img/login-banner.png"

const Login = ({ login, isAuthenticated, errorMessage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate();
	const error = errorMessage
	const [errorLoginMessage, setErrorLoginMessage] = useState('');
	
  
  useEffect(()=> {
		if (error){
			setErrorLoginMessage('Invalid login information');
		}	
	})

  const onSubmit = (data) => {
    login(data);
	};

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };
	if (isAuthenticated) {
        navigate('/');
  }
    return (
      <div className="content">
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-md-8 offset-md-2">
              
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={login_banner} className="img-fluid" alt="Login"/>	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group form-focus">
                      <input
                        type="email"
                        name="email"
                        className="form-control floating"
                        {...register('email',{
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        aria-invalid={errors && errors.email ? "true" : "false"}
                      />
                      <label className="focus-label">Email</label>
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                      </div>
                      <div className="form-group form-focus">
                      <input
                          type="password"
                          name="password"
                          className="form-control floating"
                          {...register('password', {
                            required: 'Password is required',
                          })}
                          aria-invalid={errors && errors.password ? "true" : "false"}
                        />
                        <label className="focus-label">Password</label>
                        { errors.password && (
                          <span className="text-danger">{errors.password.message}</span>
                        )}
                      </div>
                      {errorLoginMessage && <div className="alert alert-danger">{errorLoginMessage}</div>}
                      <div className="text-right">
                        <a className="forgot-link" href="/forgot-password">Forgot Password ?</a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                          
                          <div className="col">
                            <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
                          </div>
                      </div>
                      
                      <div className="text-center dont-have">
                        Don’t have an account? <a href="/register">Register</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, { login })(Login);





