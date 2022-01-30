import React, { useState, Fragment } from "react";
import "./reservas.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { Container } from "react-bootstrap";
import Swal from 'sweetalert2'

const Reservas = () => {
    const [contacts, setContacts] = useState(data);
    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });
    const [editContactId, setEditContactId] = useState(null);
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
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
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
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
    return (
        <Container>
            <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Horario</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Actions</th>
                                
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
};
export default Reservas;