import  {React, useState, useEffect } from "react";
import { Col, Row, Card,Flex,Button, Space, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, SaveOutlined, DownloadOutlined } from '@ant-design/icons';
import Breadcramb from '../breadcramb';
import '../unique-word/uniqueWord.css'


const CustomCountriesCard = ({  content }) => (
    <Card className='countries-custom-card' content={content} style={{ width: 300 }}>
      <p  style={{ color: 'black' }}>{content}</p>
    </Card>
  );


const Word = ({categoryId, wordId}) => {

  const urlWord = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${categoryId}/words/${wordId}`;
  const urlCategory = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${categoryId}`;
  const relevantWords = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${categoryId}/words`;

  const [isLoading, setIsLoading] = useState(true);
  const [wordData, setWordData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [randomFive, setRandomFive] = useState([]);


//fetch category datas
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
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } 
    };

    fetchData();
  }, [urlWord]); 

  // Fetch word data and relevant words data
useEffect(() => {
  const fetchWordAndRelevantWords = async () => {
    try {
      // Fetch word data
      const wordResponse = await fetch(urlWord, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (wordResponse.ok) {
        const wordDataResponse = await wordResponse.json();
        setWordData(wordDataResponse);
        // Fetch relevant words data using the obtained word data
        const relevantWordsResponse = await fetch(relevantWords, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (relevantWordsResponse.ok) {
          // Filter relevant words based on word data
          const relevantWordsDataResponse = await relevantWordsResponse.json();
          const filteredWords = relevantWordsDataResponse.filter(word => word.id !== wordDataResponse.id);
          const randomFive = chooseRandomElements(filteredWords, 5);
          setRandomFive(randomFive);

        } else {
          console.error('API error:', relevantWordsResponse.statusText);
        }
      } else {
        console.error('API error:', wordResponse.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setIsLoading(false);
    }

  };

  // Function to choose random elements from the array
  const chooseRandomElements = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Call the combined fetchData function
  fetchWordAndRelevantWords();
}, [urlWord, relevantWords]);

  
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
              categoryName={categoryData.category_name}
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
        <Card id="unique-word-def" style={{ textAlign: "center" , height:"400px" }} title={wordData.word_name} bordered={false}>
        <div dangerouslySetInnerHTML={{ __html: wordData.word_desc }} />
        </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={6}>

        <p style={{textAlign:"center", fontSize:"15px", color: "#2b2676"}}><b >Relevant Words</b></p> 
          <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
              <Flex gap="small" vertical>
                <Row justify="center"  gutter={[16, 16]}>


                {randomFive.map((word) => (
                   <Col className='card-col' key={word.id} xs={{ span: 24 }}>
                   {word.refered_back!=null ? (
                     <Link to={`/category/${word.category_id}/words/${word.refered_back}bax`}>
                     <CustomCountriesCard id={word.id} content={word.word_name} />
                   </Link>
                   
                   ) : word.word_name.endsWith('daktil') ? (
                    
                     <CustomCountriesCard  id={word.id} content={word.word_name} />
                  
                   ) : (
                     <Link to={`/category/${word.category_id}/words/${word.id}`}>
                       <CustomCountriesCard id={word.id} content={word.word_name} />
                     </Link>
                   )}
                 </Col>


              ))}
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
