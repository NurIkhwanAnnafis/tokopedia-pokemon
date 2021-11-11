import { Popconfirm } from "antd";

export const columns = (releasePokemon = () => {}) => [
  {
    title: 'Pokemon Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => (
      <Popconfirm title="Sure to release?" onConfirm={() => releasePokemon(record.nickname)}>
        <a>Release</a>
      </Popconfirm>
    )
  },
];