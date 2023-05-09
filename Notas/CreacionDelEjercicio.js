/*
PASO A PASO PETICIONES API

Metodo GET

El metodo get llama a toda a toda la api y el tipo de dato es un array []
    1. Crear una variable de estado donde guardaremos la info de la base de datos
		Ej:
		
        	const [contacts, setContacts] = useState([])

    2. Hacer la funcion del Get (funcion del fetch)
    3. Hacer un Use Effect y dentro de este UseEffect llamar a tu función del GET
    4. Hacer un console.log(data) y revisar que llegue la info en la consola
    5. Hacer un set de mi variable 
        Ej:
            setContacts(data)
    6. Maquetar la card, etc
    7. Mapear la variable y acceder al valor de la variable del map



Metodo POST

    1. Crearse las variables de estado para cada input que va a rellenar el usuario, se rellena con un string ""
        Ej: const [full_name, setFull_name] = useState("")
    2. Controlar los imputs en las 3 CAPAS (html, javaScripct y React)
        2.1 HTML con type
        2.2 JavaScript on value
        2.3 React con onChange
    3. Dentro del body de la petición POST igualas las variables del backend a las variables del frondend
        Ej:
        body: JSON.stringify({
                "full_name": full_name, 
                "email": email,
                "agenda_slug": "ainhoaQM-agenda",
                "address": address,
                "phone": phone
            }),
    4. Arrojar la info a la consola

Metodo Delete

        1.Crear una funcion que reciba como parametro el objeto donde estamos dando click, siempre es con un arrow funcition:
            ()=>delete(objeto)
        2.Donde fue declarada la función agregarle el parametro (objeto)
        3. Hacer el fetch sumandole a la url la id del objeto. IMPORTANTE: la url tiene que estar dentro de un template string
            Ej:  `https://assets.breatheco.de/apis/fake/contact/${id}`
        4.Mando a la consola mi data del elemento eliminado
        5.Llamar a la funcion getElements


Metodo PUT

            1. Crearse la ruta DINAMICA en layout 
            2. Agregar el <Link> al boton con la ruta dinamica
                Ej:
                <Link to = {`/formEdit/${contact.id}`}>
					<button  className="btn btn-warning">
						Edit
					</button>
				</Link>
            3. Hacer unb useEffect y hacer un get de solo un objeto y despues actualizar mis variables con un set*** para cada propiedad del objeto
                Ej:
                            useEffect(() => {
                    getContact();
                }, []);
                
                const getContact = async () => {
                    let requestOptions = {
                        method: "GET",
                        redirect: "follow",
                    };
                    const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions);
                    const data = await response.json(); 
                    ***
                    setFull_name(data.full_name)
                    setEmail(data.email)
                    setAddress(data.address)
                    setPhone(data.phone)
                };
            4. Utilizar el useParams en el componente nuevo e importarlo arriba
                const {id} = useParams()
            5. Hacer el fetch sumandole a la url la id del objeto. IMPORTANTE: la url tiene que estar dentro de un template string
                Ej:  `https://assets.breatheco.de/apis/fake/contact/${id}`
            6. En el cuerpo de tu peticion igualas las variables del frontend y del backend 
            7. Arrojas el resultado a la consola

INFO SOBRE NAVIGATE 

import { useNavigate } from "react-router-dom";

dentro del componente y despues del fetch:
const navigate = useNavigate();

hay que declararlo en la funcion
navigate("/") 
        dentro de las comillas va la ruta para redirigir el usuario



*/