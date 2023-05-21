import React from "react";
import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>; //props.children will always refer to things that you pass between your opening and closing tags of the components
};

export default MainHeader;
