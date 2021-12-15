import React, { useContext } from "react";
import globalContext from "../context/globalContext";

function Header() {
  const { state } = useContext(globalContext)
  return (
    <header>createStore()</header>
  )
}

export default Header;
