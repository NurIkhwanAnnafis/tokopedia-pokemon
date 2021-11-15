/* eslint-disable react-hooks/exhaustive-deps */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { releasePokemon } from '../../store/actions/pokemon.action';
import NoPokemon from "./component/NoPokemon";
import { loading } from "../../store/actions/global.action";
import "./style/profile.scss"
import CardPokemon from "./component/CardPokemon";
import { normalizeTypes } from "../../helpers/normalize";
import { message } from "antd";

const Profile = (props) => {
  const { listMyPokemon } = props;
  const dispatch = useDispatch();

  const handleReleasePokemon = (currentPokemon) => {
    dispatch(loading(true, "catch"));

    setTimeout(() => {
      dispatch(releasePokemon(currentPokemon));
      message.success("Pokemon released");
      dispatch(loading(false));
    }, 2000);
  }

  return (
    <div className="container-my-pokemon">
      {listMyPokemon && listMyPokemon.map(val => (
        <CardPokemon
          imagePokemon={val.sprites.front_default}
          nickname={val.nickname}
          name={val.name}
          currentPokemon={val}
          handleReleasePokemon={handleReleasePokemon}
          types={normalizeTypes(val.types)}
        />
      ))}
      <br />
      {(!listMyPokemon || listMyPokemon.length === 0) && <NoPokemon />}
    </div>
  );
}

export default Profile;
