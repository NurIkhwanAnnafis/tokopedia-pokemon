import React from "react";
import {
  Link
} from "react-router-dom";
import logo from "../assets/logoPokemon.png"

const Header = () => {
  return (
    <div className="Header">
      <Link to="/"><img width="30" src={logo} alt=""></img></Link>
      <Link to="/profile"><h4>My Pokemon</h4></Link>
    </div>
  )
}

export default Header;