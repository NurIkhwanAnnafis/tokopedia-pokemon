/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getListPokemon } from '../../data/pokemon';
import { normalizeGetId } from '../../helpers/normalize';
import '../../styles/App.css';
import { columns } from './settings/table';

const params = {
  limit: 20,
  offset: 1,
}

const App = () => {
  const navigate = useNavigate();
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(async() => {
    const temp = await getListPokemon(params);
    setListPokemon(temp.results);
  },[])

  const handleClick = (event, record, rowIndex) => {
    const id = normalizeGetId(record);

    navigate(`/pokemon/${id}`);
  }

  return (
    <Table 
      size="small"
      style={{ width: '80%' }}
      columns={columns}
      dataSource={listPokemon}
      pagination={false}
      onRow={(record, rowIndex) => {
        return {
          onClick: event => handleClick(event, record, rowIndex)
        }
      }}
    />
  );
}

export default App;
