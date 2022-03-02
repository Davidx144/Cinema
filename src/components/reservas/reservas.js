import React, { useState, Fragment } from "react";
import "./reservas.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { Container } from "react-bootstrap";
import Swal from 'sweetalert2'
import BeatLoader from "react-spinners/BeatLoader"


var URLactual = (window.location);
var urlreserva = (URLactual.pathname)
var idsUserReservas = urlreserva.slice(14)
var idsUser = urlreserva.slice(0, 14)

console.log("este"+idsUser)
if (idsUser === "/bookingsUser/") {
    var apiReservas = (`/api/bookingsUser/${idsUserReservas}`)
}
console.log("hola"+apiReservas)

var reservasDelUsuario =[{title:"El Closet",hour:"3:00 PM",chairs:[0,1,6],bookingValue:"23400"},{title:"Scream La Película",hour:"12:00 PM",chairs:[1,3],bookingValue:"7800"}]
reservasUsuario()
async function reservasUsuario(props) {
    const respuestas = await fetch(apiReservas, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    reservasDelUsuario = await respuestas.json()
    console.log(reservasDelUsuario)

}

const Reservas = () => {
    const [contacts, setContacts] = useState(reservasDelUsuario);


    const [editFormData, setEditFormData] = useState({
        title: "",
        hour: "",
        chairs: [],
        bookingValue: "",
    });
    const [editContactId, setEditContactId] = useState(null);
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("title");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            title: editFormData.title,
            hour: editFormData.hour,
            chairs: editFormData.chairs,
            bookingValue: editFormData.bookingValue,
        };
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    };
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            title: contact.title,
            hour: contact.hour,
            chairs: contact.chairs,
            bookingValue: contact.bookingValue,
        };
        setEditFormData(formValues);
    };
    const handleCancelClick = () => {
        setEditContactId(null);
    };
    const handleDeleteClick = (contactId) => {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Disfruta de las mejores peliculas',
        })
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    const [loading, setLoading] = useState(true)
    const cambiarEstado = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    if (loading) {
        cambiarEstado()
        return (
            <div>
                <Container className='loading'>
                    <BeatLoader
                        size={15}
                    />
                </Container>
            </div>
        )
    } else {

        return (
            <Container>
                <div className="app-container">
                    <form onSubmit={handleEditFormSubmit}>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Horario</th>
                                    <th scope="col">Sillas</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Acción</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <Fragment>
                                        {editContactId === contact.id ? (
                                            <EditableRow
                                                editFormData={editFormData}
                                                handleEditFormChange={handleEditFormChange}
                                                handleCancelClick={handleCancelClick}
                                            />
                                        ) : (
                                            <ReadOnlyRow
                                                contact={contact}
                                                handleEditClick={handleEditClick}
                                                handleDeleteClick={handleDeleteClick}
                                            />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>
                </div>
            </Container>
        );
    }
};
export default Reservas;