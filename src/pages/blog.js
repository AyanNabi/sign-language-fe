import React from 'react'
import Layout from '../components/Layout/layout'
import { Col, Row } from 'antd'
import LeftSideBlog from '../components/Blog/leftSideBlog'
import RightSideBlog from '../components/Blog/rightSideBlog'
const Blog = () => {
  return (
  <Layout>

    
     <Row  gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
    <Col  span={18} push={6}>
    <RightSideBlog></RightSideBlog>
    </Col>
    
    <Col span={6} pull={18}>
  
    <LeftSideBlog></LeftSideBlog>

    </Col>
  </Row>
  </Layout>
  )
}

export default Blog
