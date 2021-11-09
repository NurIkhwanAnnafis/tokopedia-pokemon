/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'antd';
import { columns } from './settings/table';

const Profile = () => {

  return (
    <Table 
      size="small"
      style={{ width: '80%' }}
      columns={columns}
      dataSource={[]}
      pagination={false}
    />
  );
}

export default Profile;
