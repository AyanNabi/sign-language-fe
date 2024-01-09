import React from 'react'
import { Tabs, Card} from 'antd'
import { Flex } from 'antd';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './alphabet.css'
const { TabPane } = Tabs;


const CustomCard = ({ title, content, subcontent }) => (

  //  <Card  className='custom-card-alphabet '  content={content} subcontent={subcontent}  style={{ width: 200, height: 150 }}>
  //   <p className="custom-card-alphabet-text">{content}</p>
  //   <p style={{fontSize:"14px"}}  className="cusom-card-subtitle">{subcontent}</p>
  // </Card>

  // <Card className='custom-card-alphabet' title={title} style={{ width: 300, height:"90px" }}>
  //   <p className="custom-card-alphabet-text">{content}</p>
  //   <p style={{fontSize:"14px"}}  className="cusom-card-subtitle">{subcontent}</p>
  // </Card>
  // // circle la olan 
    <div >
    <a className="custom-card-alphabet wallet"  href="#">
      <div className="overlay"></div>
      <div className="circle">
      <p className='custom-card-alphabet-content' style={{margin:"0px"}} >{content}</p>
      </div>
      <p style={{fontSize:"12px", margin:"0px" }} className="day-text">{subcontent}</p>

    
      
    </a>
    </div>
);


const CustomCountriesCard = ({  content }) => (
  <Card className='countries-custom-card' content={content} style={{ width: 300, backgroundColor:"#F0E7FF !important" }}>
    <p  style={{ color: 'black' }}>{content}</p>
  </Card>
);



const CustomAllCategoryCard = ({ id, content, subcontent,  }) => (
  // <Card  className='custom-card custom-all-category-card' id={id} content={content} subcontent={subcontent}  style={{ width: 200, height: 150 }}>
  //   <p className="cusom-card-title">{content}</p>
  //   <p style={{fontSize:"14px"}}  className="cusom-card-subtitle">{subcontent}</p>
  // </Card>



<div className="custom-card" id={id} content={content} subcontent={subcontent} >
    <div className="card-content">
        <p className="content-text">
        <span  style={{fontSize:"20px" }} >{content}</span>
      </p>
      <p style={{fontSize:"12px" }}  className="day-text">{subcontent}</p>
      
    </div>


</div>



// // circle la olan 
// <div >
// <a className="card wallet" href="#">
//   <div className="overlay"></div>
//   <div className="circle">
//     <span>Ayan</span>
//   </div>
//   <p style={{margin:"0px" }} >{content}</p>
//   <p style={{fontSize:"12px", margin:"0px" }} className="day-text">{subcontent}</p>
// </a>
// </div>




);

const AlphabetTab = ({element}) => {

  const alphabet = ['A', 'B', 'C', 'Ç', 'D', 'E', 'Ə', 'F', 'G', 'Ğ', 'H', 'X', 'I', 'İ', 'J', 'K', 'Q', 'L', 'M', 'N', 'O','Ö', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const urlCategories = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/categories`;
  const urlSentences = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/sentences`;
  const urlAlphabet = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/alphabets_summary`;



  const [categoriesData, setCategoriesData] = useState([]);
  const [sentencesData, setSentencesData] = useState([]);
  const [alphabetData, setAlphabetData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(urlCategories, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setCategoriesData(responseData); 
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchCategories();
  }, []); 




  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(urlSentences, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setSentencesData(responseData); 
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [urlCategories]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(urlAlphabet, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setAlphabetData(responseData); 
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchCategories();
  }, []); 



  const [activeKey, setActiveKey] = useState("1");  // Default active key

  useEffect(() => {
    // Set the active key based on the value of the 'element' prop
    if (element === 'All Categories') {
      setActiveKey("1");  // "All Categories" tab key
    } else if (element === 'Alphabet') {
      setActiveKey("2");  // "Alphabet" tab key
    }
    else if (element === 'Sentences') {
      setActiveKey("3");  // "Alphabet" tab key
    }
  }, [element]);

  const handleTabChange = (key) => {
    setActiveKey(key);
  };



  return (
    <div className='body-margin'>
      <Tabs  style={{ justifyContent: 'center' }}  defaultActiveKey={activeKey} activeKey={activeKey}  onChange={handleTabChange}>
      
        <TabPane id='all-categories-tab' tab="All Categories" key="1">
        <div >
            <Flex gap="small" vertical>
            <div>
              {isLoading ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
              <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
             </div>
                
                ) : (
                <Row gutter={[16, 16]}>
                    {categoriesData.map((category, index) => (
                      <Col key={index} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 4 }}>
                        <Link to={`/category/${category.id}/words`}>
                          <CustomAllCategoryCard  id={category.id}  content={category.name} subcontent={`Jestlər: ${category.words_count} `} />
                        </Link>
                      </Col>
                    ))}
                </Row>
                )}
             </div>
            </Flex>
          </div>
        </TabPane>

        <TabPane id='alphabet-tab' tab="Alphabet" key="2" >
          <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
                {alphabetData.map((letter, index) => (
                  <Col key={index} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span:  8}} lg={{ span: 3 }}>
                    <Link to={`/alphabet/${letter.letter_name}`} >
                      <CustomCard content={letter.letter_name} subcontent={`Jestlər: ${letter.number_of_words} `}/>
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

        <TabPane id='sentences-tab' tab="Sentences" key="3">
          <div >
            <Flex gap="small" vertical>
              <Row gutter={[16, 16]}>
                {sentencesData.map((sentence, index) => (
                  <Col key={index} xs={{ span: 12 }} sm={{ span: 12 }} md={{ span:  8}} lg={{ span: 6 }}>
                   <Link to={`/category/:categoryId/words/:wordId`}>
                     <CustomCountriesCard className="sentences-card" content={sentence.text}></CustomCountriesCard>
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

