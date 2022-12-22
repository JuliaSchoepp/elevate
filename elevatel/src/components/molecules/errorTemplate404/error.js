import React from "react";
import "./index.css";
import MainLogo from "../../atoms/logoModule/MainLogo";

class ErrorPage extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/404";
  };

  render() {
    return (
      <div className="error-page">
        <MainLogo />
        <div className="text">
          <h3>
           	OOOOPSSS, etwas schief gelaufen!
			   <form action="/">
				<input type="submit" className="error_btn" value="Auf die Home Seite!" />
			</form>
          </h3>
        </div>
      </div>
    );
  }
}

export { ErrorPage };
