import { Avatar, Button, List, Typography } from 'antd';
import React from 'react';

function Activity() {
  const data = [
    {
      name: "Order A",
      orderTime: 1
    },
    {
      name: "Order B",
      orderTime: 2
    },
    {
      name: "Order C",
      orderTime: 3
    },
    {
      name: "Order D",
      orderTime: 4
    },
    {
      name: "Order E",
      orderTime: 5
    },
    {
      name: "Order F",
      orderTime: 6
    },
    
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <Typography.Title level={3} strong className='primary--color'>
          Recent Activity
        </Typography.Title>
        <Button type='link' className='gray--color'>
          View All
        </Button>
      </div>
      <List
        dataSource={data}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="" />}  
              title={<a href="#">{user.name}</a>}
              description={`Ordered a new plant`}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Activity;
