/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailPokemon } from "../../data/pokemon";


const Detail = () => {
  const params = useParams();
  const [detailPokemon, setDetailPokemon] = useState(null);

  useEffect(async() => {
    const temp = await getDetailPokemon(params.id);
    setDetailPokemon(temp);
  },[])

  console.log(detailPokemon)

  return (
    <Fragment>
      {detailPokemon && (
        <div>
          <img src={detailPokemon.sprites.front_default} alt="" />
          <p>{detailPokemon.name}</p>
          <br />
          <Button type="primary">
            Try to Catch
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default Detail;
