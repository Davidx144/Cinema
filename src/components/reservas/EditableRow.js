import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      </td>
      <td>

      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      </td>
      <td>
        <button type="submit" class="btn btn-success">Guardar</button>
        <button type="button" class="btn btn-danger" onClick={handleCancelClick}>
          Cancelar
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;