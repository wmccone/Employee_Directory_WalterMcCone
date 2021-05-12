import React from "react";
import "./style.css";

function Main(props) {
  return <main className="main">{props.children}</main>;
}

export default Main;