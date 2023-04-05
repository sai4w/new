import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signup } from '../Services/Actions/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import myImg from '../Assets/img/login-banner.png';

const Register = ({ signup, isAuthenticated }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const stateErrors = useSelector(state => state.auth.errorMessage);
  const [accountCreated, setAccountCreated] = useState(false);
  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  useEffect(() => {
    setErrorUsername(stateErrors?.data?.username?.[0] ?? '');
    setErrorEmail(stateErrors?.data?.email?.[0] ?? '');
  }, [stateErrors]);

  const onSubmit = data => {
    console.log(data);
   const formData = new FormData()
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('re_password', data.re_password);
    signup(data, () => setAccountCreated(true));
    
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    navigate('/');
  }
  if (accountCreated) {
    return navigate('/login');
  }

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 col-lg-6 login-left">
                  <img src={myImg} className="img-fluid" alt="Auction Register" />
                </div>
                <div className="col-md-12 col-lg-6 login-right">
                  <div className="login-header">
                    <h3>Register</h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group form-focus">
                      <input
                        type="text"
                        name="username"
                        className="form-control floating"
                        {...register('username', {
                          required: 'Username is required',
                          maxLength: {
                            value: 50,
                            message: 'Username should not exceed 50 characters',
                          },
                        })}
                        aria-invalid={errors && errors.username ? "true" : "false"}
                      />
                      <label className="focus-label">Username</label>
                      { errors.username && (
                        <span className="text-danger">{errors.username.message}</span>
                      )}
                      {errorUsername && <span className="text-danger">{errorUsername}</span>}
                    </div>
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
                      {errorEmail && <span className="text-danger">{errorEmail}</span>}
                    </div>
                    <div className="form-group form-focus">
                      <input
                        type="password"
                        name="password"
                        className="form-control floating"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                          },
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]*$/,
                            message: 'Password must include at least one letter and one number.',
                          },
                        })}
                        aria-invalid={errors && errors.password ? "true" : "false"}
                      />
                      <label className="focus-label">Create Password</label>
                      {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="form-group form-focus">
                      <input
                        type="password"
                        name="re_password"
                        className="form-control floating"
                        {...register('re_password', {
                          required: 'Please confirm password',
                          validate: value =>
                            value === document.getElementsByName('password')[0].value ||
                            'The passwords do not match',
                        })}
                        aria-invalid={errors && errors.re_password ? "true" : "false"}
                      />
                      <label className="focus-label">Confirm Password</label>
                      {errors.re_password && (
                        <span className="text-danger">{errors.re_password.message}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <a className="forgot-link" href="/login">
                        Already have an account?
                      </a>
                    </div>
                    <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">
                      Register
                    </button>
                  </form>
              <div className="login-or">
                <span className="or-line"></span>
                <span className="span-or">or</span>
              </div>
              <div className="row form-row social-login">
												
												<div className="col">
													<a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Login</a>
												</div>
											</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup })(Register);




