import React from 'react';
import { Layout, Flex } from 'antd';

const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const Blog = () => (
  <Flex gap="middle" wrap="wrap">
    
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    
  </Flex>
);
export default Blog;

// import React from 'react';
// import { Col, Row } from 'antd';

// const Blog = () => {
//   return (
//     <div>
//        <Row>
//     <Col span={18} push={6}>
//       col-18 col-push-6
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere perspiciatis iusto!
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero aspernatur, nostrum vitae nisi officia rerum corporis, debitis consectetur neque explicabo eum amet!
//     </Col>
    
//     <Col span={6} pull={18}>
//       col-6 col-pull-18
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim error officia odio sunt. Corporis numquam id accusamus adipisci modi nesciunt explicabo, iusto doloremque?
//     </Col>
//   </Row>
//     </div>
//   );
// };

// export default Blog;
