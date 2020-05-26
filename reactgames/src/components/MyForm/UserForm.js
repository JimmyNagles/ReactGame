import React, { useState } from "react";

const UserForm = () => {
  const [UserForm, SetUserForm] = useState({
    Name: "",
    LastName: "",
    Email: "",
    Work: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();

    alert(UserForm);
  };
  return (
    <div className="container center ">
      <form className="center" onSubmit={HandleSubmit}>
        <label className="input-field">User Name</label>
        <input
          value={UserForm.Name}
          required
          onChange={(e) => SetUserForm(e.target.value)}
        ></input>
        <label className="input-field">Last Name</label>
        <input
          value={UserForm.LastName}
          required
          onChange={(e) => SetUserForm(e.target.value)}
        ></input>
        <label className="input-field">Email</label>
        <input
          value={UserForm.Email}
          required
          onChange={(e) => SetUserForm(e.target.value)}
        ></input>
        <label className="input-field">Work</label>
        <input
          value={UserForm.Work}
          required
          onChange={(e) => SetUserForm(e.target.value)}
        ></input>
        <input
          className="btn-large waves-effect waves-light blue darken-4"
          type="submit"
          value="Create User"
        ></input>
      </form>
    </div>
  );
};

export default UserForm;
