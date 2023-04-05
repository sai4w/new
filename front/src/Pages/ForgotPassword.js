import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ACTIVATION, reset_password } from '../Services/Actions/auth';

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const stateErrors = useSelector(state => state.auth.errorMessage);
	const dispatch = useDispatch();
  const[errorEmail, setErrorEmail] = useState('');
  useEffect(() => {
    setErrorEmail(stateErrors?.data?.email?.[0] ?? '');
  }, [stateErrors]);

  const onSubmit = (data) => {
	dispatch(reset_password(data));
  }
  return(
    <div className="content">
				<div className="container-fluid">
					
					<div className="row">
						<div className="col-md-8 offset-md-2">
							
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										<img src="assets/img/login-banner.png" className="img-fluid" alt="Login Banner"/>	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Forgot Password?</h3>
											<p className="small text-muted">Enter your email to get a password reset link</p>
										</div>
										
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="form-group form-focus">
												<input 
                                                    type="email"
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
											<div className="text-right">
												<a className="forgot-link" href="/login">Remember your password?</a>
											</div>
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
										</form>
										
										
									</div>
								</div>
							</div>
							
							
						</div>
					</div>

				</div>

			</div>
  );
}
export default ForgotPassword;