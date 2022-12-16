import React from "react";

import "./index.css";
import berlin from'../../../img/berlin_sil.png';
import elevatel_Logo from'../../../img/logo.png';

export default function MainLogo() {
  return (
    <div className="main-logo-hp">
		<div className="logo_box" >
			<img  className="elevatel_logo" src={elevatel_Logo} alt="elevatel_Logo"/>
			<img  className="berlin_logo" src={berlin} alt="berlin"/>
		</div>
		
    </div>
  );
}
