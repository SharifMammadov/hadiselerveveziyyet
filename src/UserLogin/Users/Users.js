import React from "react";
import Mail from "./EMails/mail";
import Pass from "./Passwords/pass";

class Users extends React.Component {
  render() {
    return (
      <div>
        <Mail/>
        <Pass/>
      </div>
    );
  }
}

export default Users;
