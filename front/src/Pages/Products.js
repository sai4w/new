import React from 'react';
import "../Assets/js/jquery.min.js";
import Slider from "react-slick";
import jQuery from "jquery";
import "../Assets/js/script.js";
import doctor_01 from "../Assets/img/doctors/doctor-01.jpg";

const Products = () => {

    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	  }
    return (
        <section className="section section-doctor">
            	<div className="container-fluid">
					<div className="section-header text-center">
                        <br/>
						<h2 style={{color:"#09e5ab"}}>All Products</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					
				</div>  
        <div className="container-fluid">
           <div className="row">
              
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
                  <div className="col-md-3 mb-3">
                        <div className="profile-widget">
                            <div className="doc-img">
                                <a href="doctor-profile.html">
                                    <img className="img-fluid" alt="User Image" src={doctor_01}/>
                                </a>
                                <a href="#"  className="fav-btn">
                                    <i className="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div className="pro-content">
                                <h3 className="title">
                                    <a href="doctor-profile.html">Title of the product</a> 
                                    <i className="fas fa-check-circle verified"></i>
                                </h3>
                                <p className="speciality">Categorys</p>
                        
                                <ul className="available-info">
                                
                                    <li>
                                        <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                    </li>

                                    <li>
                                        <i className="far fa-money-bill-alt"></i> Price of Participation $300 - $1000 
                                        <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                    </li>
                                </ul>
                                <div className="row row-sm">
                                    <div className="col-6">
                                        <a href="doctor-profile.html" className="btn view-btn">Participate</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                </div>
           </div>
        </div>
    </section>
    )
}
export default Products