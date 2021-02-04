import React, {useState, useEffect} from 'react';
import axiosOrders from "../../axios-orders";
import {NavLink} from "react-router-dom";

const About = () => {
	const [about, setAbout] = useState({
		firstName: '',
		lastName: '',
		birthDate: '',
		employment: '',
		hobbies: '',
		thoughts: ''
	});

	const fetchData = async () => {
		try {
			const response = await axiosOrders.get('/about.json');
			setAbout(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData().then(console.error);
	}, []);

	return (
		<dl className="row mt-5">
			<dt className="col-sm-3">First Name</dt>
			<dd className="col-sm-9">{about.firstName}</dd>

			<dt className="col-sm-3">Last Name</dt>
			<dd className="col-sm-9">{about.lastName}</dd>

			<dt className="col-sm-3">Date of Birth</dt>
			<dd className="col-sm-9">{about.birthDate}</dd>

			<dt className="col-sm-3">Employment</dt>
			<dd className="col-sm-9">{about.employment}</dd>

			<dt className="col-sm-3 text-truncate">Hobbies</dt>
			<dd className="col-sm-9">{about.hobbies}</dd>

			<dt className="col-sm-3">Your thoughts</dt>
			<dd className="col-sm-9">{about.thoughts}</dd>

			<div className="div mt-5">
				<NavLink exact to="/about/edit" className="btn btn-secondary">Edit</NavLink>
			</div>
		</dl>
	);
};

export default About;