import React from "react";
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/"><h3>Pokemon</h3></Link>
      <Link to="/profile"><h3>My Pokemon</h3></Link>
    </div>
  )
}

export default Header;