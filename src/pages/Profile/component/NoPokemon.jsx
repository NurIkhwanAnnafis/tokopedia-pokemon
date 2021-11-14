import React from "react";
import NoPokemon from "../../../assets/nopokemon.png";

const index = () => {
  return (
    <div className="no-pokemon">
      <img width={100} src={NoPokemon} alt="" />
      <p>No Pokemon!</p>
    </div>
  )
}

export default index;