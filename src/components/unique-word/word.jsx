import React from 'react'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import  { useState, useEffect } from "react";
import { Flex} from 'antd';
import { Link } from 'react-router-dom';
import {  Button, Space, Menu } from 'antd';
import { HeartOutlined, SaveOutlined, DownloadOutlined } from '@ant-design/icons';
import Breadcramb from '../breadcramb';

import '../unique-word/uniqueWord.css'


const CustomCountriesCard = ({  content }) => (
    <Card className='countries-custom-card' content={content} style={{ width: 300 }}>
      <p  style={{ color: 'black' }}>{content}</p>
    </Card>
  );
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

  

const Word = ({categoryId, wordId}) => {
  const menu = (
    <Menu >
      {items.map(item => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  ); 

  const url = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${categoryId}/words/${wordId}`;
  
  
  const [wordData, setWordData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const urlCategory = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${categoryId}`;
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlCategory, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setCategoryData(responseData);
          console.log(categoryData);
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } 
    };

    // Call the fetchData function
    fetchData();
  }, [url]); // Include url as a dependency to trigger fetch when url changes



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setWordData(responseData);
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        // Set loading to false once data is fetched (success or error)
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [url]); // Include url as a dependency to trigger fetch when url changes



  
  return (
    <>
   

      <div >
      {isLoading ? (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
    <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
    </div>
  </div>
      ) : (
        <div >
            <Breadcramb
              categoryId={categoryData.id}
              categoryName={categoryData.name}
              wordId={wordData.id}
              wordName={wordData.word_name}
            />
           <Row className='my-4' style={{display:"flex" , justifyContent:"center"}} >
        <Col style={{display:"flex" , justifyContent:"center",width: 240}} xs={24} sm={24} md={12} lg={12} xl={6}>
              <Card 
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <div style={{display:"flex"}}>
            <Button type="primary" style={{ marginRight: "34px" }}><DownloadOutlined /> Download File </Button>
              <Space>
              <Button type="default" icon={<SaveOutlined />} /> {/* Save */}
              <Button type="default" icon={<HeartOutlined />} /> {/* Like (Heart) */}
            
          
    
                    
          </Space>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6}>
        <Card id="unique-word-def" style={{ textAlign: "center" }} title={wordData.word_name} bordered={false}>
        <div dangerouslySetInnerHTML={{ __html: wordData.word_desc }} />
        </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6}>

        <p style={{textAlign:"center", fontSize:"15px", color: "#2b2676"}}><b >Relevant Words</b></p> 
          <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
              <Flex gap="small" vertical>
                <Row justify="center"  gutter={[16, 16]}>

                <Col  className='card-col' key={1} xs={{ span: 24 }}  >

                <Link to={`/dictionary/word1`}>
                <CustomCountriesCard content={'word1'} /> 
                      </Link>

            
                </Col>
                  
                <Col  className='card-col' key={2} xs={{ span: 24 }}>
                <Link to={`/dictionary/word2`}>
                <CustomCountriesCard content={'word2'} /> 
                      </Link>
                </Col>
                  
              
          
                </Row>
              </Flex>
            </div>


        </Col>
          </Row>

        </div>
      )}
    </div>
  </>
  )
}

export default Word
