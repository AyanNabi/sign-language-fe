import React from 'react';
import { Col, Row } from 'antd';

const Blog = () => {
  return (
    <div>
       <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere perspiciatis iusto!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero aspernatur, nostrum vitae nisi officia rerum corporis, debitis consectetur neque explicabo eum amet!
    </Col>
    
    <Col span={6} pull={18}>
      col-6 col-pull-18
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim error officia odio sunt. Corporis numquam id accusamus adipisci modi nesciunt explicabo, iusto doloremque?
    </Col>
  </Row>
    </div>
  );
};

export default Blog;
