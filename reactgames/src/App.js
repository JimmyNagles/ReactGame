import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <Router>
      <div>
      <Nav/>
      
        <Switch>
   
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
