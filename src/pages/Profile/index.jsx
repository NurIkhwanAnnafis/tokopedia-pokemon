/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { releasePokemon } from '../../store/actions/pokemon.action';
import { useState } from "react";
import NoPokemon from "./component/NoPokemon";
import { loading } from "../../store/actions/global.action";

const customStyle = {
  width: '425px',
}

const Profile = (props) => {
  const { listMyPokemon } = props;
  const dispatch = useDispatch();
  const [indexPokemon, setIndexPokemon] = useState(0);

  const handleReleasePokemon = () => {
    dispatch(loading(true, "catch"));

    setTimeout(() => {
      dispatch(releasePokemon(listMyPokemon[indexPokemon]));
      dispatch(loading(false));
    }, 2000);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: e => setIndexPokemon(e)
  }

  console.log(indexPokemon, listMyPokemon)

  return (
    <div style={customStyle}>
      <Slider {...settings}>
        {listMyPokemon.map(val => (
          <div>
            <img className="mx-auto" src={val.sprites.front_default} alt="" />
            <h6>{val.name}</h6>
            <p>{val.nickname}</p>
          </div>
        ))}
      </Slider>
      {listMyPokemon.length > 0 ? (
        <Button type="primary" onClick={handleReleasePokemon}>
          Release
        </Button>
      ) : (
        <NoPokemon />
      )}
    </div>
  );
}

export default Profile;
