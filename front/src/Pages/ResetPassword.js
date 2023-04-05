import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset_password_confirm } from '../Services/Actions/auth';

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [passwordReset, setPasswordReset] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
  const formData = new FormData();
  formData.append('uid', uid);
  formData.append('token', token);
  formData.append('new_password', data.password);
  formData.append('re_new_password', data.re_password);
	dispatch(reset_password_confirm(formData, () => setPasswordReset(true)));
  }
  if (passwordReset) {
    return navigate('/login');
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
											<h3>Reset Password</h3>
											<p className="small text-muted">Enter your new password to reset</p>
										</div>
										
										<form onSubmit={handleSubmit(onSubmit)}>
											
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
                      <label className="focus-label">New Password</label>
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
											
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset</button>
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
export default ResetPassword;