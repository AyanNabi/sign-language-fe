import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Card } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


const LeftSideBlog = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
        <div>
                <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
                width: 200,
            }}
            />
        </div>


        <div>
       <Card 
            title="Card title"
            bordered={false}
            style={{
            width: 300,
            color:"black !important"

            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        </div>


        <div>
       <Card
            title="Card title"
            bordered={false}
            style={{
            width: 300,
            }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        </div>
      
    </div>
  )
}

export default LeftSideBlog
