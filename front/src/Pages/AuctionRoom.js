import React, { useEffect } from 'react';

import winner from "../Assets/img/winner.jpg"
import patient1 from "../Assets/img/patients/patient1.jpg"

const AuctionRoom = () => {
    function exitRoom() {
        
    }
    return (
        <div className="content">
				<div className="container">
				
					<div className="call-wrapper">
						<div className="call-main-row">
							<div className="call-main-wrapper">
								<div className="call-view">
									<div className="call-window">
									
										<div className="fixed-header">
											<div className="navbar">
												<div className="user-details mr-auto">
													<div className="float-left user-img">
														<a className="avatar avatar-sm mr-2" href="patient-profile.html" title="Charlene Reed">
															<img src={patient1} alt="User Image" className="rounded-circle"/>
															<span className="status online"></span>
														</a>
													</div>
													<div className="user-info float-left">
														<a href="patient-profile.html"><span>Charlene Reed</span></a>
														<span className="last-seen">Online</span>
													</div>
												</div>
												<ul className="nav float-right custom-menu">
													<li className="nav-item dropdown dropdown-action">
														<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog"></i></a>
														<div className="dropdown-menu dropdown-menu-right">
															<a href="javascript:void(0)" className="dropdown-item">Settings</a>
														</div>
													</li>
												</ul>
											</div>
										</div>
										
										<div className="call-contents">
											<div className="call-content-wrap">
												<div className="voice-call-avatar">
													<img src={winner} alt="Winner Image" className="call-avatar"/>
													<span className="username">Dr. Darren Elder</span>
													<span className="call-timing-count">00:59</span>
												</div>
												
											</div>
										</div>
										
										<div className="call-footer">
											<div className="call-icons">
												<ul className="call-items">
													<li className="call-item">
														<a href="#" title="See participants" data-placement="top" data-toggle="tooltip">
															<i className="fa fa-users"></i>
														</a>
													</li>
												</ul>
												<div className="end-call">
													<a href="javascript:void(0);">
														<i className="material-icons">exit_to_app</i>
													</a>
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
    );
};

export default AuctionRoom;
    