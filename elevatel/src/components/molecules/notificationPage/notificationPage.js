import React, { Component } from "react";
import "./index.css";

class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = '/alarm-results';
  }

  render() {
    return (
      <div className="notification-page">
        <div className="text">
          <h3>
            Damit du über den Status der Aufzüge an den Stationen die Du täglich
            oder regelmäßig besuchst informiert bleibst, kannst Du dir hier
            Alarme einrichten. Dafür benötigen wir Deine E-Mail-Adresse.
          </h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              E-Mail:
              <input type="text" name="email" />
            </label>
            <button type="submit">Los</button>
          </form>
        </div>
      </div>
    );
  }
}

export {NotificationPage}