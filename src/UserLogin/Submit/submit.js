import React from "react";

class Submit extends React.Component {
  render() {
    return (
      <div className="login">
        <input className="mails" type="email" id="mail" name="mail" />
        <input className="passwords" type="password" id="pass" name="pass" />
        <button className="loginSubmit" type="submit">Login</button>
      </div>
    );
  }
}

export default Submit;
