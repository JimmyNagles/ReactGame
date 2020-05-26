import React, { useState } from "react";

const UserForm = ({ AddUser }) => {
  const [UserForm, SetUserForm] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    alert(UserForm);
    AddUser(UserForm);
  };

  const handleChange = (e) => {};

  return (
    <div className="container center ">
      <form className="center" onSubmit={HandleSubmit}>
        <label className="input-field">User Name</label>
        <input
          value={UserForm}
          required
          onChange={(e) => SetUserForm(e.target.value)}
        ></input>

        <input
          className="btn-large waves-effect waves-light blue darken-4"
          type="submit"
          value="AddUser"
        ></input>
      </form>
    </div>
  );
};

export default UserForm;
