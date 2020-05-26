import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/Users/UserList";
import UserForm from "../components/MyForm/UserForm";

const Home = () => {
  return (
    <div>
      <div className="row">
        <UserList></UserList>
      </div>
    </div>
  );
};

export default Home;
