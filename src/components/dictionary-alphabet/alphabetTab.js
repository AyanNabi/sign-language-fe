import React from 'react'
import { Tabs, Card} from 'antd'
import { Flex } from 'antd';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState, useEffect } from "react";
import './alphabet.css'
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const CustomCard = ({ title, content }) => (
  <Card className='custom-card' title={title} style={{ width: 300 }}>
    <p className="custom-card-text">{content}</p>
  </Card>
);

const CustomAllCategoryCard = ({ content, subcontent }) => (
  <Card className='custom-card custom-all-category-card' content={content} subcontent={subcontent} style={{ width: 200 }}>
    <p className="cusom-card-title">{content}</p>
    <p className="cusom-card-subtitle">{subcontent}</p>
    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />

  </Card>
);

const AlphabetTab = () => {
  const alphabet = ['A', 'B', 'C', 'Ç', 'D', 'E', 'Ə', 'F', 'G', 'Ğ', 'H', 'X', 'I', 'İ', 'J', 'K', 'Q', 'L', 'M', 'N', 'O','Ö', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
  const url = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/names`;


  const [data, setData] = useState([]);

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
  });



  return (
    <div className='body-margin'>
      <Tabs  style={{ justifyContent: 'center' }} defaultActiveKey="1">
        <TabPane id='all-categories-tab' tab="All Categories" key="1">
        <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>

              <Col key={1} xs={{ span: 12 }} sm={{ span: 8 }} md={{span: 8 }} lg={{ span: 4 }}>
                
            
              <Link to={`/dictionary/Shopping`}>
              <CustomAllCategoryCard content={'Shopping'} subcontent={'240 jest'} />
                    </Link>
              </Col>
               
              <Col key={2} xs={{ span:12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4 }}>
                    <Link to={`/dictionary/Countries`}>
                      <CustomAllCategoryCard content={'Countries'} subcontent={'240 jest'} />
                    </Link>
              </Col> 
                
              <Col key={3} xs={{ span: 12 }} sm={{ span:8  }} md={{span: 8  }} lg={{ span: 4 }}>
              <Link to={`/dictionary/Numbers`}>
                      <CustomAllCategoryCard content={'Numbers'} subcontent={'240 jest'} />
                    </Link>
              
              </Col>
              
              <Col key={4} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8  }} lg={{ span: 4  }}>
              <Link to={`/dictionary/Transportation`}>
                      <CustomAllCategoryCard content={'Transportation'} subcontent={'240 jest'} />
                    </Link>
             
              </Col>
                

              <Col key={5} xs={{ span: 12 }} sm={{ span: 8 }} md={{span: 8 }} lg={{ span: 4  }}>
              <Link to={`/dictionary/Food`}>
                      <CustomAllCategoryCard content={'Food'} subcontent={'240 jest'} />
                    </Link>
             
              </Col>

              <Col key={5} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8  }} lg={{ span: 4 }}>
              <Link to={`/dictionary/Technology`}>
                      <CustomAllCategoryCard content={'Technology'} subcontent={'240 jest'} />
                    </Link>
             
              </Col>

              <Col key={6} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4  }}>
              <Link to={`/dictionary/Work`}>
                      <CustomAllCategoryCard content={'Work'} subcontent={'240 jest'} />
                    </Link>
             
             
              </Col>

              <Col key={7} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4 }}>
              <Link to={`/dictionary/Animals`}>
                      <CustomAllCategoryCard content={'Animals'} subcontent={'240 jest'} />
                    </Link>
             
              </Col>

              <Col key={8} xs={{ span: 12 }} sm={{ span: 8 }} md={{span: 8 }} lg={{ span: 4  }}>
              <Link to={`/dictionary/Professions`}>
                      <CustomAllCategoryCard content={'Professions'} subcontent={'240 jest'} />
                    </Link>
             
              
              </Col>

              <Col key={9} xs={{ span: 12 }} sm={{ span: 8 }} md={{span: 8 }} lg={{ span: 4 }}>
              <Link to={`/dictionary/Time`}>
                      <CustomAllCategoryCard content={'TechnoTimelogy'} subcontent={'240 jest'} />
                    </Link>
              </Col>
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
                  
                   <Link to={`/dictionary/word`}>
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

