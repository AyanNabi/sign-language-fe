import React from 'react'
import { Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};

const Colloborations = () => {
  return (
    <div>
      <div className="home-title padding-for-sections">
          <h2>Colloborations </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      
    <Row justify="center">
      <Col span={4} style={{display:"flex", alignContent:"center"}}>
        
        <Link>
        <img style={{height:"53%", marginTop:"34px"}}  src="./media/pics/a.jpg" alt="" />
        </Link>
     
      </Col>
      <Col span={4}>
      <Link>
        <img  src="./media/pics/b.jpg" alt="" />
        </Link>
      </Col>
      <Col span={4}>
      <Link>
        <img  src="./media/pics/c.jpg" alt="" />
        </Link>
      </Col>
      <Col span={4}>
      <Link>
        <img  src="./media/pics/d.jpg" alt="" />
        </Link>
      </Col>
    </Row>

    
    </div>
  )
}

export default Colloborations
