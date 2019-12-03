import React from "react";
import NavBar from "./NavBar";
import SessionWindow from "./SessionWindow"

export default class Session extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SessionWindow />
        
      </div>
    );
  }
}
