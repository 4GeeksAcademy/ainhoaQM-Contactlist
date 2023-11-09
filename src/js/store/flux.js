const getState = ({ getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getAllContacts: async () => {
                const requestOptions = {
                    method: "GET",
                    redirect: "follow",
                };
                const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/ainhoascontacts", requestOptions);
                const data = await response.json();
                setStore({ contacts: data }); 
            },

			createContact: async (contactData) => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contactData),
				});
				const data = await response.json();
				setStore({ newContact: data });
			},

            deleteContact: async (id) => {
                const requestOptions = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                };
                const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, requestOptions);
                const data = await response.json();
                console.log(data);
                getActions().getAllContacts();
            },

			getSingleContact: async (id) => {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`);
				const data = await response.json();
				setStore({ selectedContact: data });
			},

			editContact: async (id, updatedContact) => {
				const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedContact),
				});
				const data = await response.json();
			},
		}	
	};
};

export default getState;
