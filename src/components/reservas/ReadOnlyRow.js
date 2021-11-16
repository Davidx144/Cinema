import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button" class="btn btn-warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Editar
        </button>
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;