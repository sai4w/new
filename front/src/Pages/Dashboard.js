import React from 'react';
import icon01 from "../Assets/img/icon-01.png";
import icon02 from "../Assets/img/icon-02.png";
import icon03 from "../Assets/img/icon-03.png";
import doctorthumb02 from "../Assets/img/doctors/doctor-thumb-02.jpg";
import patient from "../Assets/img/patients/patient.jpg";

const Dashboard = () => {
	return (
		<>
			
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Dashboard</h2>
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
                                                <a href="/ProfileSetting">
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
                                                <a href="index.html">
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

							<div className="row">
								<div className="col-md-12">
									<div className="card dash-card">
										<div className="card-body">
											<div className="row">
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<div className="circle-bar circle-bar1">
															<div className="circle-graph1" data-percent="75">
																<img src={icon01} className="img-fluid" alt="patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>1500</h3>
															<p className="text-muted">Till Today</p>
														</div>
													</div>
												</div>
												
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<div className="circle-bar circle-bar2">
															<div className="circle-graph2" data-percent="65">
																<img src={icon02} className="img-fluid" alt="Patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>160</h3>
															<p className="text-muted">06, Nov 2019</p>
														</div>
													</div>
												</div>
												
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget">
														<div className="circle-bar circle-bar3">
															<div className="circle-graph3" data-percent="50">
																<img src={icon03} className="img-fluid" alt="Patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>85</h3>
															<p className="text-muted">06, Apr 2019</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="row">
								<div className="col-md-12">
									<h4 className="mb-4">Product Details</h4>
									<div className="appointment-tab">
									
									
								
										
										<div className="tab-content">
										
										
											<div className="tab-pane show active" id="upcoming-appointments">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th className="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={patient} alt="User Image"/></a>
																				<a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td className="text-center">$150</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
															
																</tbody>
															</table>		
														</div>
													</div>
												</div>
											</div>
										
											<div className="tab-pane" id="today-appointments">
												<div className="card card-table mb-0">
													<div className="card-body">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th className="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient6.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Elsie Gilley <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">6.00 PM</span></td>
																		<td>Fever</td>
																		<td>Old Patient</td>
																		<td className="text-center">$300</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Joan Gardner <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">5.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td className="text-center">$100</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient8.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Daniel Griffing <span>#PT0007</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">3.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td className="text-center">$75</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Walter Roberson <span>#PT0008</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">1.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td className="text-center">$350</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Robert Rhodes <span>#PT0010</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td className="text-center">$175</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="patient-profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image"/></a>
																				<a href="patient-profile.html">Harry Williams <span>#PT0011</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="d-block text-info">11.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td className="text-center">$450</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="" className="btn btn-sm bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="" className="btn btn-sm bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="" className="btn btn-sm bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>		
														</div>	
													</div>	
												</div>	
											</div>
									
											
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>	
		</>
	)
}
export default Dashboard