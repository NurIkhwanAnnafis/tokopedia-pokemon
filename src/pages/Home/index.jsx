/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Pagination } from 'antd';
import { useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getListPokemon } from '../../data/pokemon';
import { normalizeGetId } from '../../helpers/normalize';
import '../../styles/App.css';
import { columns } from './settings/table';

const params = {
  limit: 10,
  offset: 1,
}

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listPokemon, setListPokemon] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
  })

  useEffect(async() => {
    const temp = await dispatch(getListPokemon(params));
    setListPokemon(temp.results);
    const tempPagination = { ...pagination, total: temp.count };
    setPagination(tempPagination);
  },[])

  const handleClick = (event, record, rowIndex) => {
    const id = normalizeGetId(record);

    navigate(`/pokemon/${id}`);
  }

  const handleChangePage = async (page) => {
    const temp = await dispatch(getListPokemon({ ...params, offset: page }));
    setListPokemon(temp.results);
    const tempPagination = { ...pagination, page, total: temp.count };
    setPagination(tempPagination);
  }

  return (
    <Fragment>
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
      <br />
      <div className="text-center" style={{ width: '80%' }}>
        <Pagination 
          current={pagination.page} 
          total={pagination.total} 
          showSizeChanger={false} 
          onChange={handleChangePage}
          simple
          className="pagination-custom"
        />
      </div>
    </Fragment>
  );
}

export default App;
