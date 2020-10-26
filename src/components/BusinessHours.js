import React from 'react';
import { Table, Tag, Space } from 'antd';



const BusinessHours = () => {
    const columns = [
        {
          title: '',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '',
          dataIndex: '',
          key: 'age',
        },
        {
          title: 'Matin',
          dataIndex: 'matin',
          key: 'address',
        },
        {
          title: '',
          key: '',
          dataIndex: 'tags',
        },
        {
          title: 'Après-midi',
          dataIndex: 'aprem',
          key: 'action',
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'Lundi',
          matin: '09:15 - 12:15',
          aprem: '15:15 - 19:15',
        },
        {
          key: '2',
          name: 'Mardi',
          age: 42,
          matin: '09:15 - 12:15',
          aprem: '15:15 - 19:15',
        },
        {
          key: '3',
          name: 'Mercredi',
          matin: '09:15 - 12:15',
          aprem: '15:15 - 19:15',
        },
        {
          key: '4',
          name: 'Jeudi',
          matin: '09:15 - 12:15',
          aprem: '15:15 - 19:15',
        },
        {
          key: '5',
          name: 'Vendredi',
          matin: '09:15 - 12:15',
          aprem: '15:15 - 19:15',
        },
        {
          key: '6',
          name: 'Samedi',
          matin: '10:00 - 12:00',
          aprem: '',
        },
        {
          key: '7',
          name: 'Dimanche',
          matin: '10:00 - 12:00',
          aprem: '',
        },
      ];

        return (
            <Table columns={columns} dataSource={data} pagination={false} />
        )
    }


export default BusinessHours;