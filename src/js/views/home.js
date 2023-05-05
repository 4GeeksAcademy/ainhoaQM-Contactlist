import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { BsTrash3 } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';


export const Home = () => {
	const [contacts, setContacts] = useState([])
	const urlGetApi = "https://assets.breatheco.de/apis/fake/contact/agenda/ainhoaQM-agenda"

	useEffect(() => {
		getAllContacts();
	}, []);

	const getAllContacts = async () => {
		let requestOptions = {
			method: "GET",
			redirect: "follow",
		};
		const response = await fetch(urlGetApi, requestOptions);
		const data = await response.json();
		setContacts(data);
		console.log(data)
	};

	const deletContact = async (contact) => {
		console.log(contact)
		let requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
		};
		const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, requestOptions);
		const data = await response.json();
		console.log(data);

		getAllContacts();
	};

	return (
		<div className="row d-flex justify-content-center">
			{contacts.map((contact) => (
				<div key={contact.id} className="card col-md-3 m-2">
					<div className="card-body">
						<h5 className="card-title">{contact.full_name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
						<p className="card-text">{contact.address}</p>
						<p className="card-text">{contact.phone}</p>
					</div>
					<div className="card-footer bg-transparent d-flex justify-content-between">
						<button onClick={() => deletContact(contact)} className="btn btn-danger">
							<BsTrash3/>
						</button>
						<Link to={`/formEdit/${contact.id}`}>
							<button className="btn btn-warning">
								<BsPencil/>
							</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
};

