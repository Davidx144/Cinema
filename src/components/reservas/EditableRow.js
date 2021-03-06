import React from "react";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="chairs"
          value={editFormData.chairs}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      </td>
      <td>
        <button type="submit" className="btn btn-success">Guardar</button>
        <button type="button" className="btn btn-danger" onClick={handleCancelClick}>
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;