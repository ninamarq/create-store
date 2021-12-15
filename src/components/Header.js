import React, { useContext } from "react";
import globalContext from "../context/globalContext";

function Header() {
  const { state } = useContext(globalContext)
  return (
    <header>createStore({ state })</header>
  )
}

export default Header;
