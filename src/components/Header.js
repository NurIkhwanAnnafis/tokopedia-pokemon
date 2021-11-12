import React from "react";
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/"><h4>Pokemon</h4></Link>
      <Link to="/profile"><h4>My Pokemon</h4></Link>
    </div>
  )
}

export default Header;