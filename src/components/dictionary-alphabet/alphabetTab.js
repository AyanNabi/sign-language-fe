import React from 'react'
import { Tabs, Card} from 'antd'
import { Flex } from 'antd';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState, useEffect } from "react";
import './alphabet.css'
import { Link } from 'react-router-dom';
import CategoryWords from '../../pages/categoryWords';
const { TabPane } = Tabs;

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const CustomCard = ({ title, content }) => (
  <Card className='custom-card' title={title} style={{ width: 300 }}>
    <p className="custom-card-text">{content}</p>
  </Card>
);

const CustomAllCategoryCard = ({ id, content, subcontent }) => (
  <Card className='custom-card custom-all-category-card' id={id} content={content} subcontent={subcontent} style={{ width: 200 }}>
    <p className="cusom-card-title">{content}</p>
    <p className="cusom-card-subtitle">{subcontent}</p>
    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />

  </Card>
);

const AlphabetTab = () => {
  const alphabet = ['A', 'B', 'C', 'Ç', 'D', 'E', 'Ə', 'F', 'G', 'Ğ', 'H', 'X', 'I', 'İ', 'J', 'K', 'Q', 'L', 'M', 'N', 'O','Ö', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
  const url = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/categories`;

  const url2 = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/sentences`;


  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setData(responseData); // Update the data state with the array of flights
          console.log("ugurludur");
        } else {
          console.log("ugurlu deyil");
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchCategories();
  }, []); // Add an empty dependency array here


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url2, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          setData2(responseData); // Update the data state with the array of flights
          console.log("ugurludur");
        } else {
          console.log("ugurlu deyil");
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchCategories();
  }, []); // Add an empty dependency array here



  return (
    <div className='body-margin'>
      <Tabs  style={{ justifyContent: 'center' }} defaultActiveKey="1">
        <TabPane id='all-categories-tab' tab="All Categories" key="1">
        <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
              {data.map((category, index) => (
                <Col key={index} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4 }}>
                  <Link to={`/category/${category.id}/words`}>
                    <CustomAllCategoryCard id={category.id} content={category.name} subcontent={'240 jest'} />
                  </Link>
                </Col>
              ))}
              </Row>
            </Flex>
          </div>
        </TabPane>


        <TabPane id='alphabet-tab' tab="Alphabet" key="2">
          <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
                {alphabet.map((letter, index) => (
                  <Col key={index} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span:  8}} lg={{ span: 3 }}>
                    <Link to={`/dictionary/${letter}`}>
                      <CustomCard content={letter} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Flex>
          </div>
        </TabPane>

        {/* <TabPane id='configurations-tab' tab="Configurations" key="3">
          <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
                {alphabet.map((letter, index) => (
                  <Col key={index} xs={{ span: 12 }} sm={{ span: 12 }} md={{ span:  8}} lg={{ span: 6 }}>
                 
                   <Link to={`/dictionary/word`}>
                       <CustomCard className="configurations-card" content="word" />
                    </Link>

                  </Col>
                ))}
              </Row>
            </Flex>
          </div>
        </TabPane> */}

        <TabPane id='sentences-tab' tab="Sentences" key="4">
          <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
                {alphabet.map((letter, index) => (
                  <Col key={index} xs={{ span: 12 }} sm={{ span: 12 }} md={{ span:  8}} lg={{ span: 6 }}>
                  
                   <Link to={`/category/:categoryId/words/:wordId`}>
                   <CustomCard className="sentences-card" content="word"/>
                    </Link>
                  
                  </Col>
                ))}
              </Row>
            </Flex>
          </div>
        </TabPane>
      </Tabs>


    </div>

  )
}

export default AlphabetTab;

