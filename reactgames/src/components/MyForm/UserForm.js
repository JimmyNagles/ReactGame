import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [UserForm, SetUserForm] = useState({
    Fname: "",
    Lname: "",
    Email: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    addUser(UserForm);

    SetUserForm({ Fname: "", Lname: "", Email: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetUserForm({
      ...UserForm,
      [name]: value,
    });
  };
  return (
    <div className="container center ">
      <form className="center" onSubmit={HandleSubmit}>
        <label className="input-field">User Name</label>
        <input
          name="Fname"
          value={UserForm.Fname}
          required
          onChange={handleChange}
        ></input>
        <input
          name="Lname"
          value={UserForm.Lname}
          required
          onChange={handleChange}
        ></input>
        <input
          name="Email"
          value={UserForm.Email}
          required
          onChange={handleChange}
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
