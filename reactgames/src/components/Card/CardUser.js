import React from "react";

const CardUser = (props) => {
  return (
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper">
          <div class="col s2">
            <img src={props.image} alt="" class="circle responsive-img" />
          </div>
          <div class="col s10">
            <span class="black-text">
              <li> {props.Name}</li>
              <li> {props.LastName}</li>
              <li> {props.Email}</li>
              <li> {props.Profile}</li>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
