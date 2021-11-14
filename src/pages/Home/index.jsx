/* eslint-disable react-hooks/exhaustive-deps */
import { Table, Pagination } from 'antd';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getListPokemon } from '../../data/pokemon';
import { normalizeGetId } from '../../helpers/normalize';
import { columns } from './settings/table';
import { constructData } from './settings/home.helper';

const params = {
  limit: 10,
  offset: 0,
}

const App = (props) => {
  const { listMyPokemon } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listPokemon, setListPokemon] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
  })

  useEffect(async() => {
    const temp = await dispatch(getListPokemon(params));
    handleConstructData(temp)
    const tempPagination = { ...pagination, total: temp.count };
    setPagination(tempPagination);
  },[])

  const handleClick = (event, record, rowIndex) => {
    const id = normalizeGetId(record);

    navigate(`/pokemon/${id}`);
  }

  const handleChangePage = async (page) => {
    const temp = await dispatch(getListPokemon({ ...params, offset: (page - 1) * 10 }));
    handleConstructData(temp);
    const tempPagination = { ...pagination, page, total: temp.count };
    setPagination(tempPagination);
  }

  const handleConstructData = (temp) => {
    const tempResult = constructData(temp.results, listMyPokemon);
    setListPokemon(tempResult);
  }

  return (
    <div className="center-content" style={{ minHeight: 'inherit' }}>
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
    </div>
  );
}

export default App;
