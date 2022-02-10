import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.title}</td>
      <td>{contact.hour}</td>
      <td>{contact.chairs}</td>
      <td>{contact.bookingValue}</td>
      <td>
        <button
          type="button" className="btn btn-warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Editar
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(contact.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;