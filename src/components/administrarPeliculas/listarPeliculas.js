import React from "react";

const ListarPeliculas = ({ title,relevant , id, cartelera,handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{relevant }</td>
      <td>{cartelera}</td>
      <td>
        <button href={`/editar/`}
          type="button" className="btn btn-warning editBoton" 
          onClick={(event) => handleEditClick(id)}
        >
          Editar
        </button>
        <button type="button" className="btn btn-danger deleteBoton" onClick={() => handleDeleteClick(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ListarPeliculas;