/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { releasePokemon } from '../../store/actions/pokemon.action';
import { columns } from './settings/table';

const Profile = (props) => {
  const { listMyPokemon } = props;
  const dispatch = useDispatch();

  const handleReleasePokemon = nickname => {
    dispatch(releasePokemon(nickname));
  }

  console.log(listMyPokemon)

  return (
    <Table 
      size="small"
      style={{ width: '80%' }}
      columns={columns(handleReleasePokemon)}
      dataSource={listMyPokemon}
      pagination={false}
    />
  );
}

export default Profile;
