import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
    width: 230,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
    width: 250,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column5',
    dataIndex: 'address',
    key: 'address 5',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column6',
    dataIndex: 'address',
    key: 'address 6',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column7',
    dataIndex: 'address',
    key: 'address 7',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column8',
    dataIndex: 'address',
    key: 'address 8',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column9',
    dataIndex: 'address',
    key: 'address 9',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'Long Column10',
    dataIndex: 'address',
    key: 'address 10',
    ellipsis: true,
    width: 200,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

ReactDOM.render(
  <Table columns={columns} dataSource={data} scroll={{ x: '100%' }} />,
  document.getElementById('container')
);
