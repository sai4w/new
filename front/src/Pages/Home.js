import React from 'react';
import specialities_01 from '../Assets/img/specialities/specialities-01.png';
import specialities_02 from "../Assets/img/specialities/specialities-02.png";
import specialities_03 from "../Assets/img/specialities/specialities-03.png";
import specialities_04 from "../Assets/img/specialities/specialities-04.png";
import specialities_05 from "../Assets/img/specialities/specialities-05.png";


const Home = () => {

    return (
		<section className="section section-specialities">
				<div className="container-fluid">
					<div className="section-header text-center">
						<h2>Clinic and Specialities</h2>
						<p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-9">
							<div className="specialities-slider slider">
							

								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialities_01} className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Urology</p>
								</div>	
								
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialities_02} className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>
									<p>Neurology</p>	
								</div>							
								
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialities_03} className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Orthopedic</p>	
								</div>							
								
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialities_04} className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Cardiologist</p>	
								</div>							
								
								<div className="speicality-item text-center">
									<div className="speicality-img">
										<img src={specialities_05} className="img-fluid" alt="Speciality"/>
										<span><i className="fa fa-circle" aria-hidden="true"></i></span>
									</div>	
									<p>Dentist</p>
								</div>							
								
							</div>
							
						</div>
					</div>
				</div>   
			</section>	
    );
}
export default Home