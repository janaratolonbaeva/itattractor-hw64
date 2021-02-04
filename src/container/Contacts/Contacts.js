import React, {useEffect} from 'react';
import axiosOrders from "../../axios-orders";
import {NavLink} from "react-router-dom";

const Contacts = () => {
	const [contacts, setContacts] = React.useState({});

	const fetchData = async () => {
		try {
			const response = await axiosOrders.get('/contacts.json');
			setContacts(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData().then(console.error);
	});

	return (
		<div className="mt-5">
			<form>
			<address>
				<p><strong>Company: </strong>{contacts.company}</p>
				<p><strong>Address: </strong>{contacts.address}</p>
				<p><strong>Phone: </strong> {contacts.phone}</p>
			</address>
			<address>
				<p><strong>Email: </strong><a href={"mailto:" + contacts.email}>{contacts.email}</a></p>
			</address>
				<div className="mt-3">
					<NavLink exact to="/contacts/edit" className="btn btn-primary">Submit</NavLink>
				</div>
			</form>
		</div>
	);
};

export default Contacts;