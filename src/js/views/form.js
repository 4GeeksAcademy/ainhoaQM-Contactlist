import React, { useState } from "react";


export const Form = () => {
    const urlPostApi = "https://assets.breatheco.de/apis/fake/contact/"
    const [full_name, setFull_name] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const postContacts = async () => {
        var requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "full_name": full_name,
                "email": email,
                "agenda_slug": "ainhoaQM-agenda",
                "address": address,
                "phone": phone
            }),
            redirect: "follow",
        };
        const response = await fetch(urlPostApi, requestOptions);
        const data = await response.json();
        console.log(data)
    };

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">
                        Full name
                    </label>
                    <input
                        type="text" 
                        value={full_name} onChange={(e) => setFull_name(e.target.value)}
                        className="form-control" id="inputName" placeholder="Full name" aria-label="Full name"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="form-control" id="inputEmail" placeholder="E-mail" aria-label="E-mail"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        value={address} onChange={(e) => setAddress(e.target.value)}
                        className="form-control" id="inputAddress" placeholder="Address" aria-label="Address"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                        className="form-control" id="inputPhone" placeholder="Phone" aria-label="Phone"
                    />
                </div>
                <div className="col-12">
                    <button onClick={postContacts} className="btn btn-primary btn-success float-end">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};