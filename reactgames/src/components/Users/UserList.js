import React, { useState } from "react";
import CardUser from "../Card/CardUser";
import Uuid from "react-uuid";
import UserForm from "../MyForm/UserForm";

const UserList = () => {
  const [Users, setUsers] = useState([
    {
      Fname: "john",
      Lname: "Smith",
      Image: "https://www.fillmurray.com/200/200",
      Email: "Jsmith@gmail.com",
      id: 1,
    },
    {
      Fname: "Mike",
      Lname: "Smith",
      Image: "https://www.fillmurray.com/200/200",
      Email: "Mikesmith@gmail.com",
      id: 2,
    },
    {
      Fname: "Jimmy",
      Lname: "Nagles",
      Image: "https://www.fillmurray.com/200/200",
      Email: "JN9@gmail.com",
      id: 3,
    },
    {
      Fname: "Clau",
      Lname: "Saez",
      Image: "https://www.fillmurray.com/200/200",
      Email: "Czes@gmail.com",
      id: 3,
    },
  ]);

  const AddUser = () => {
    setUsers([
      ...Users,
      {
        Fname: UserForm,
        id: Uuid(),
      },
    ]);
  };

  return (
    <div className="card-panel container  col l6  ">
      <h2>New User</h2>
      <UserForm AddUser={AddUser}></UserForm>
      <h2>List of User</h2>

      <p className="">
        {Users.map((User) => {
          return (
            <CardUser
              Name={User.Fname}
              LastName={User.Lname}
              Email={User.Email}
              image={User.Image}
              Profile={User.id}
            />
          );
        })}
      </p>
    </div>
  );
};

export default UserList;
