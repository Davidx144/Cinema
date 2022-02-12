import React from "react";

const ListarPeliculas = ({ title,chairs, id,hour,bookingValue, handleEditClick, handleDeleteClick }) => {
  console.log("Estas son las sillas:" + chairs)
  return (
    <tr>
      <td>{title}</td>
      <td>{chairs+"."}</td>
      <td>{hour}</td>
      <td>{bookingValue}</td>
      <td>
        <button href={`/editar/`}
          type="button" className="btn btn-warning" 
          onClick={(event) => handleEditClick(id)}
        >
          Editar
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ListarPeliculas;