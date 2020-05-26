import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/Users/UserList";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
<div className="row">


      <UserList></UserList>
</div>

    </div>
  );
};

export default Home;
