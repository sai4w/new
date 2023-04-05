import React from 'react';
import patient from "../Assets/img/patients/patient.jpg";
import doctor from "../Assets/img/doctors/doctor-thumb-02.jpg";
import doctor1 from "../Assets/img/doctors/doctor-thumb-02.jpg";
import img from "../Assets/img/img-01.jpg";
import feature from "../Assets/img/features/feature-01.jpg";

const Profile = () => {
	return (
		<>
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Profile</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Profile</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="card">
				<div className="card-body">
					<div className="doctor-widget">
						<div className="doc-info-left">
							<div className="doctor-img">
								<img src={doctor1} className="img-fluid" alt="User Image" />
							</div>
							<div className="doc-info-cont">
								<h4 className="doc-name">Dr. Darren Elder</h4>
								<p className="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
								<p className="doc-department"><img src={feature} className="img-fluid" alt="Speciality" />Dentist</p>
								<div className="rating">
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star filled"></i>
									<i className="fas fa-star"></i>
									<span className="d-inline-block average-rating">(35)</span>
								</div>
								<div className="clinic-details">
									<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA - <a href="javascript:void(0);">Get Directions</a></p>
									<ul className="clinic-gallery">
										<li>
											<a href={feature} data-fancybox="gallery">
												<img src={feature} alt="Feature" />
											</a>
										</li>
										<li>
											<a href={feature} data-fancybox="gallery">
												<img src={feature} alt="Feature" />
											</a>
										</li>
										<li>
											<a href={feature} data-fancybox="gallery">
												<img src={feature} alt="Feature" />
											</a>
										</li>
										<li>
											<a href={feature} data-fancybox="gallery">
												<img src={feature} alt="Feature" />
											</a>
										</li>
									</ul>
								</div>
								<div className="clinic-services">
									<span>Dental Fillings</span>
									<span>Teeth Whitneing</span>
								</div>
							</div>
						</div>
						<div className="doc-info-right">
							<div className="clini-infos">
								<ul>
									<li><i className="far fa-thumbs-up"></i> 99%</li>
									<li><i className="far fa-comment"></i> 35 Feedback</li>
									<li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
									<li><i className="far fa-money-bill-alt"></i> $100 per hour </li>
								</ul>
							</div>
							<div className="doctor-action">
								<a href="javascript:void(0)" className="btn btn-white fav-btn">
									<i className="far fa-bookmark"></i>
								</a>
								<a href="chat.html" className="btn btn-white msg-btn">
									<i className="far fa-comment-alt"></i>
								</a>
								<a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
									<i className="fas fa-phone"></i>
								</a>
								<a href="javascript:void(0)" className="btn btn-white call-btn" data-toggle="modal" data-target="#video_call">
									<i className="fas fa-video"></i>
								</a>
							</div>
						
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-body pt-0">

					<nav className="user-tabs mb-4">
						<ul className="nav nav-tabs nav-tabs-bottom nav-justified">
							<li className="nav-item">
								<a className="nav-link active" href="#doc_overview" data-toggle="tab">Details</a>
							</li>

						</ul>
					</nav>

					<div className="tab-content pt-0">


					<section class="comp-section comp-cards">
							<div class="comp-header">
                                <h3 class="comp-title">Products</h3>
                                <div class="line"></div>
                            </div>
						
							<div class="row">
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src={img} class="card-img-top"/>
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and links</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="card-link" href="#">Card link</a>
											<a class="card-link" href="#">Another link</a>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src={img} class="card-img-top"/>
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and links</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="card-link" href="#">Card link</a>
											<a class="card-link" href="#">Another link</a>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 d-flex">
									<div class="card flex-fill">
										<img alt="Card Image" src={img} class="card-img-top"/>
										<div class="card-header">
											<h5 class="card-title mb-0">Card with image and links</h5>
										</div>
										<div class="card-body">
											<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
											<a class="card-link" href="#">Card link</a>
											<a class="card-link" href="#">Another link</a>
										</div>
									</div>
								</div>

						</div>
						</section>




					</div>
				</div>
			</div>
		</>
	)
}
export default Profile;