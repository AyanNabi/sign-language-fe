import React from 'react'
import Layout from '../components/Layout/layout'
import { Col, Row } from 'antd'
import LeftSideBlog from '../components/blog/leftSideBlog';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import RightSideBlog from '../components/blog/rightSideBlog'
const Blog = () => {
  return (
  <Layout>


<MDBRow>
      <MDBCol sm='6' md='4'lg='4' xl='4' >
      <LeftSideBlog></LeftSideBlog>

      </MDBCol>
      <MDBCol sm='6' md='8' lg='8' xl='8'>
      <RightSideBlog></RightSideBlog>

      </MDBCol>
    </MDBRow>


  </Layout>
  )
}

export default Blog
