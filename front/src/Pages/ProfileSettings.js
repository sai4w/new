import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import patient from "../Assets/img/patients/patient.jpg";
import { createprofile, logout } from '../Services/Actions/auth';
import { connect } from 'react-redux';
const ProfileSettings = ({ logout, user }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('birth_day', data.birth_day);
        formData.append('address', data.adress);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('country', data.country);
        formData.append('phone', data.phone);
        formData.append('zip', data.zip_code);
        if(data.picture){
            console.log(data.picture[0]);
        }
        formData.append('picture', data.picture[0]);
        formData.append('user', user?.id);
        createprofile(formData);
        
        
    };
    const handleLogout = () => {
    	logout();
  	};

    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Profile Settings</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">


                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <div className="profile-sidebar">
                                <div className="widget-profile pro-widget-content">
                                    <div className="profile-info-widget">
                                        <a href="#" className="booking-doc-img">
                                            <img src={patient} alt="User Image" />
                                        </a>
                                        <div className="profile-det-info">
                                            <h3>Richard Wilson</h3>
                                            <div className="patient-details">
                                                <h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                                <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-widget">
                                    <nav className="dashboard-menu">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <i className="fas fa-columns"></i>
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/AddProduct">
                                                    <i className="fas fa-bookmark"></i>
                                                    <span>Add Product</span>
                                                </a>
                                            </li>

                                            <li className="active">
                                                <a href="/ProfileSettings">
                                                    <i className="fas fa-user-cog"></i>
                                                    <span>Profile Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="change-password.html">
                                                    <i className="fas fa-lock"></i>
                                                    <span>Change Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={handleLogout} href="/login">
                                                    <i className="fas fa-sign-out-alt"></i>
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>


                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row form-row">
                                            <div className="col-12 col-md-12">
                                                <div className="form-group">
                                                    <div className="change-avatar">
                                                        <div className="profile-img">
                                                             <img src={patient} alt="User Image" />
                                                        </div>
                                                        <div className="upload-img">
                                                            <div className="change-photo-btn">
                                                                <span>
                                                                    <i className="fa fa-upload"></i> Upload Photo
                                                                </span>
                                                                <input 
                                                                    type="file" 
                                                                    className="upload" 
                                                                    accept="image/*"
                                                                    {...register('picture')}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>First Name*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('first_name', {
                                                                required: 'first name is required',
                                                                })}
                                                                aria-invalid={errors && errors.first_name ? "true" : "false"}
                                                            />
                                                            { errors.first_name && (
                                                                <span className="text-danger">{errors.first_name.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('last_name', {
                                                                required: 'last name is required',
                                                                })}
                                                                aria-invalid={errors && errors.last_name ? "true" : "false"}
                                                            />
                                                            { errors.last_name && (
                                                                <span className="text-danger">{errors.last_name.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Date of Birth*</label>
                                                    <input 
                                                    
                                                        type="date"
                                                        className="form-control"
                                                                {...register('birth_day', {
                                                                required: 'date of birth is required',
                                                                })}
                                                                aria-invalid={errors && errors.birth_day ? "true" : "false"}
                                                            />
                                                            { errors.birth_day && (
                                                                <span className="text-danger">{errors.birth_day.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Mobile*</label>
                                                    <input 
                                                        type="tel"
                                                        className="form-control"
                                                                {...register('phone', {
                                                                required: 'Phone number is required',
                                                                })}
                                                                aria-invalid={errors && errors.phone ? "true" : "false"}
                                                            />
                                                            { errors.phone && (
                                                                <span className="text-danger">{errors.phone.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Address*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('adress', {
                                                                required: 'adress name is required',
                                                                })}
                                                                aria-invalid={errors && errors.adress ? "true" : "false"}
                                                            />
                                                            { errors.adress && (
                                                                <span className="text-danger">{errors.adress.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group">
                                                    <label>City*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('city', {
                                                                required: 'city is required',
                                                                })}
                                                                aria-invalid={errors && errors.city ? "true" : "false"}
                                                            />
                                                            { errors.city && (
                                                                <span className="text-danger">{errors.city.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group">
                                                    <label>State*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('state', {
                                                                required: 'state is required',
                                                                })}
                                                                aria-invalid={errors && errors.state ? "true" : "false"}
                                                            />
                                                            { errors.state && (
                                                                <span className="text-danger">{errors.state.message}</span>
                                                            )}
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group">
                                                    <label>Zip*</label>
                                                    <input 
                                                        type="number"
                                                        className="form-control"
                                                                {...register('zip_code', {
                                                                required: 'zip code name is required',
                                                                })}
                                                                aria-invalid={errors && errors.zip_code ? "true" : "false"}
                                                            />
                                                            { errors.zip_code && (
                                                                <span className="text-danger">{errors.zip_code.message}</span>
                                                            )}                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Country*</label>
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                                {...register('country', {
                                                                required: 'country name is required',
                                                                })}
                                                                aria-invalid={errors && errors.country ? "true" : "false"}
                                                            />
                                                            { errors.country && (
                                                                <span className="text-danger">{errors.country.message}</span>
                                                            )}                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-section">
                                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
const mapStateToProps = state => ({
	user: state.auth.user
});

export default connect(mapStateToProps, { logout })(ProfileSettings);
