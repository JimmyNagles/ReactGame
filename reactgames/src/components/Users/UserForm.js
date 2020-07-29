import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [UserForm, SetUserForm] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    addUser(UserForm);

    SetUserForm({ Fname: "", Lname: "", Email: "",Password:"" });
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
        <label className="input-field">First Name</label>
        <input
          name="Fname"
          value={UserForm.Fname}
          required
          onChange={handleChange}
        ></input>
        <label className="input-field">Last Name</label>
        <input
          name="Lname"
          value={UserForm.Lname}
          required
          onChange={handleChange}
        ></input>
        <label className="input-field">Email</label>
        <input
          name="Email"
          value={UserForm.Email}
          required
          onChange={handleChange}
        ></input>
        <label className="input-field">Password</label>
        <input
          name="Password"
          value={UserForm.Password}
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
