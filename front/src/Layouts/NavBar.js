import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

import { logout } from '../Services/Actions/auth';

import patient from "../Assets/img/patients/patient.jpg";

import logo from '../Assets/img/logo.png'

const NavBar = ({ logout, isAuthenticated, user }) => {
  
	const handleLogout = () => {
    	logout();
  	};
    return (
        <header className="header">
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<a id="mobile_btn" >
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="/" className="navbar-brand logo">
							<img src={logo} className="img-fluid" alt="Logo"/>
						</a>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<a href="index.html" className="menu-logo">
								<img src={logo} className="img-fluid" alt="Logo"/>
							</a>
							<a id="menu_close" className="menu-close" >
								<i className="fas fa-times"></i>
							</a>
						</div>
						<ul className="main-nav">
							<li className="has-submenu active">
								<a href="/">Home <i className="fas fa-chevron-down"></i></a>
							</li>
							<li className="has-submenu">
								<a href="/products">Products <i className="fas fa-chevron-down"></i></a>
							</li>	
							<li className="has-submenu">
								<a href="#">Auctions <i className="fas fa-chevron-down"></i></a>
							</li>
							<li className="login-link">
								<a href="/login">Login / Signup</a>
							</li>
						</ul>		 
					</div>		 
					
					{isAuthenticated ? (
						<ul className="nav header-navbar-rht">
						<DropdownButton
						  id="dropdown-item-button"
						  title={
							<span className="user-img">
							  <img className="rounded-circle" src={patient} width="31" alt="Darren Elder" />
							</span>
						  }
						>
						  <div className="user-header">
							<div className="avatar avatar-sm">
							  <img src={patient} alt="User Image" className="avatar-img rounded-circle" />
							</div>
							<div className="user-text">
							  <h6>{ user?.username }</h6>
							  <p className="text-muted mb-0">Doctor</p>
							</div>
						  </div>
						  <Dropdown.Item href="doctor-dashboard.html">Dashboard</Dropdown.Item>
						  <Dropdown.Item href="/profile-settings">Profile Settings</Dropdown.Item>
						  <Dropdown.Item  onClick={handleLogout} href="/login">Logout</Dropdown.Item>
						</DropdownButton>
					  </ul>
						) : (
						<ul className="nav header-navbar-rht">
							<li className="nav-item">
							<a className="nav-link header-login" href="/login">login / Signup </a>
							</li>
						</ul>
						)}

						
					
				</nav>
			</header>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});

export default connect(mapStateToProps, { logout })(NavBar);
