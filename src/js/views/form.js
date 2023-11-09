import React, { useState, useContext } from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { Context } from "../store/appContext.js";
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        address: "",
        phone: "",
        agenda_slug: "ainhoascontacts"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateContact = async (e) => {
        e.preventDefault();
        actions.createContact(formData);
        navigate('/');
    };

    return (
        <div className="container">
            <form className="row g-3" onSubmit={handleCreateContact}>
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">
                        Full name
                    </label>
                    <input
                        type="text" 
                        value={formData.full_name}
                        onChange={handleInputChange}
                        name="full_name"
                        className="form-control" id="inputName" placeholder="Full name" aria-label="Full name"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        name="email"
                        className="form-control" id="inputEmail" placeholder="E-mail" aria-label="E-mail"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={handleInputChange}
                        name="address"
                        className="form-control" id="inputAddress" placeholder="Address" aria-label="Address"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        value={formData.phone}
                        onChange={handleInputChange}
                        name="phone"
                        className="form-control" id="inputPhone" placeholder="Phone" aria-label="Phone"
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-success float-end">
                        <AiOutlineCheck />
                    </button>
                </div>
            </form>
        </div>
    );
};
