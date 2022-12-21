import React from "react";
import "./index.css";
import MainLogo from "../../atoms/logoModule/MainLogo";

class NotificationPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/alarm-results";
  };

  render() {
    return (
      <div className="notification-page" data-cy="notification-page">
        <MainLogo />
        <div className="text">
          <h3>
            Damit du über den Status der Aufzüge an den Stationen die Du täglich
            oder regelmäßig besuchst informiert bleibst, kannst Du dir hier
            Alarme einrichten.
          </h3>
          <h3>Dafür benötigen wir Deine E-Mail-Adresse.</h3>

          <form onSubmit={this.handleSubmit} data-testid="alarm-form">
            <label>
              E-Mail:
              <input type="text" name="email" data-cy="alarm-input"/>
            </label>
            <button type="submit" data-cy="alarm-submit">Los</button>
          </form>
        </div>
      </div>
    );
  }
}

export { NotificationPage };
