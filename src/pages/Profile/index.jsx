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
import "./style/profile.scss"

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

  return (
    <div>
      <div className="box-my-pokemon mt-5">
        <Slider {...settings}>
          {listMyPokemon.map(val => (
            <div>
              <p>{val.nickname}</p>
              <img className="mx-auto" src={val.sprites.front_default} alt="" />
              <h6><i>{val.name}</i></h6>
            </div>
          ))}
        </Slider>
      </div>
      <br />
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
