import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { BsTrash3 } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';

export const Home = () => {
	const { actions, store } = useContext(Context);

    useEffect(() => {
        const svgContainer = document.createElement("div");
        svgContainer.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
                <symbol id="info-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465 .598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </symbol>
            </svg>
        `;
        document.body.appendChild(svgContainer);
    }, []);

	useEffect(() => {
        actions.getAllContacts(); 
    }, [actions]);

    const deleteContact = (id) => {
        actions.deleteContact(id); 
    };

    return (
        <div className="container">
            {store.contacts.length > 0 ? (
                <div className="row d-flex justify-content-center">
                    {store.contacts.map((contact) => (
                        <div key={contact.id} className="card col-md-3 m-2">
                            <div className="card-body">
                                <h5 className="card-title">{contact.full_name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                                <p className="card-text">{contact.address}</p>
                                <p className="card-text">{contact.phone}</p>
                            </div>
                            <div className="card-footer bg-transparent d-flex justify-content-between">
                                <button onClick={() => deleteContact(contact.id)} className="btn btn-danger">
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
            ) : (
                <div className="alert alert-primary d-flex align-items-center justify-content-center mt-4" role="alert">
                    <svg className="bi flex-shrink-0 me-2 info-icon" role="img" aria-label="Info:">
                        <use xlinkHref="#info-fill"/>
                    </svg>
                    <div>
                        ¡Crea tu primer contacto!
                    </div>
                    <svg className="bi flex-shrink-0 ms-2 info-icon" role="img" aria-label="Info:">
                        <use xlinkHref="#info-fill"/>
                    </svg>
                </div>
            )}
        </div>
    )
};
