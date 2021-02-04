import React, {useEffect} from 'react';
import axiosOrders from "../../axios-orders";

const EditContacts = ({history}) => {
	const [contacts, setContacts] = React.useState({});

	const fetchData = async () => {
		try {
			const response = await axiosOrders.get('/contacts.json');
			setContacts(response.data);
		} catch(e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData().then(console.error);
	}, []);

	const changeHandler = e => {
		const {name, value} = e.target;

		setContacts(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const postContacts = async e => {
		e.preventDefault();
		const contactsCopy = {...contacts};

		try {
			await axiosOrders.put('/contacts.json', contactsCopy);
		} finally {
			history.push('/contacts');
		}
	};


	return (
		<div className="mt-5">
			<form onSubmit={postContacts}>
				<div className="mb-3">
					<label className="form-label">Company name</label>
					<input type="text" className="form-control"
								 name="company" onChange={changeHandler}
								 value={contacts.company}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input type="text" className="form-control"
								 name="address" onChange={changeHandler}
								 value={contacts.address}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input type="text" className="form-control" name="phone"
								 onChange={changeHandler} value={contacts.phone}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Employment</label>
					<input type="text" className="form-control"
								 name="email" onChange={changeHandler}
								 value={contacts.email}
					/>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditContacts;