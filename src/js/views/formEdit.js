import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams, useNavigate } from "react-router";
import { AiOutlineCheck } from 'react-icons/ai';

export const FormEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getSingleContact(id);
    }, [id, actions]);

    const handleEditContact = (e) => {
        e.preventDefault();

        const updatedContact = {
            full_name: e.target.full_name.value,
            email: e.target.email.value,
            agenda_slug: "ainhoascontacts",
            address: e.target.address.value,
            phone: e.target.phone.value
        };

        actions.editContact(id, updatedContact);
        navigate("/");
    };

    return (
        <div className="container">
            {store.selectedContact && (
                <form className="row g-3" onSubmit={handleEditContact}>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">
                            Full name
                        </label>
                        <input
                            type="text"
                            defaultValue={store.selectedContact.full_name}
                            name="full_name"
                            className="form-control"
                            id="inputName"
                            placeholder="Full name"
                            aria-label="Full name"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            defaultValue={store.selectedContact.email}
                            name="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="E-mail"
                            aria-label="E-mail"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            defaultValue={store.selectedContact.address}
                            name="address"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Address"
                            aria-label="Address"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            defaultValue={store.selectedContact.phone}
                            name="phone"
                            className="form-control"
                            id="inputPhone"
                            placeholder="Phone"
                            aria-label="Phone"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-success float-end">
                            <AiOutlineCheck />
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
