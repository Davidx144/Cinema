import React from "react";
import './reservadas.css'

const ListarPeliculas = ({ title,chairs, id,hour,bookingValue, id_movie,handleEditClick, handleDeleteClick }) => {
  console.log("Estas son las sillas:" + chairs)
  return (
    <tr>
      <td>{title}</td>
      <td>{chairs+"."}</td>
      <td>{hour}</td>
      <td>{bookingValue}</td>
      <td>
        <button href={`/editar/`}
          type="button" className="btn btn-warning editBoton" 
          onClick={(event) => handleEditClick(id,id_movie)}
        >
          Editar
        </button>
        <button type="button" className="btn btn-danger deleteBoton" onClick={() => handleDeleteClick(id,title,hour)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ListarPeliculas;