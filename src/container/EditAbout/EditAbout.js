import React, {useState, useEffect} from 'react';
import axiosOrders from "../../axios-orders";

const EditAbout = ({history}) => {
	const [about, setAbout] = useState({});

	const fetchData = async () => {
		try {
			const response = await axiosOrders.get('/about.json');
			setAbout(response.data);
		} catch(e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData().then(console.error);
	}, []);

	const changeHandler = e => {
		const {name, value} = e.target;

		setAbout(prevState => ({
			...prevState,
				[name]: value
		}));
	};

	const postAbout = async e => {
		e.preventDefault();
		const aboutCopy = {...about};

		try {
			await axiosOrders.put('/about.json', aboutCopy);
		} finally {
			history.push('/about');
		}
	};

	return (
		<div className="mt-5">
			<form onSubmit={postAbout}>
				<div className="mb-3">
					<label className="form-label">First Name</label>
					<input type="text" className="form-control"
								 name="firstName" onChange={changeHandler}
								 value={about.firstName}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Last Name</label>
					<input type="text" className="form-control"
								 name="lastName" onChange={changeHandler}
								 value={about.lastName}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Date of Birth</label>
					<input type="text" className="form-control"
								 placeholder="12.12.1912" name="birthDate"
								 onChange={changeHandler} value={about.birthDate}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Employment</label>
					<input type="text" className="form-control"
								 name="employment" onChange={changeHandler}
								 value={about.employment}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Hobbies</label>
					<textarea className="form-control" rows="3"
										name="hobbies" onChange={changeHandler}
										value={about.hobbies}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Your thoughts</label>
					<textarea className="form-control" rows="3"
										name="thoughts" onChange={changeHandler}
										value={about.thoughts}
					/>
				</div>
				<div className="mb-3">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditAbout;