import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src="https://sistemas.uepb.edu.br/cas/themes/uepb/css/img/logo.png"
          alt=""
        />
      </div>
      <div className="title">
        <h3>METODOLOGIA CIENTÍFICA</h3>
      </div>
    </header>
  );
}
