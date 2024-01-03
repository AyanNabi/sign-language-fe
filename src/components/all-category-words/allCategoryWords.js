import React from 'react'
import { Card} from 'antd'
import { Flex } from 'antd';
import { Col, Row } from 'antd';
import  { useState, useEffect } from "react";
import '../dictionary-alphabet/alphabet.css'
import { Link } from 'react-router-dom';
import Breadcramb from '../breadcramb';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const CustomCountriesCard = ({ id, content }) => (
    <Card className='countries-custom-card' id={id} content={content} style={{ width: 300 }}>
      <p  style={{ color: 'black' }}>{content}</p>
    </Card>
  );

const AllCategoryWords = ({element}) => {

  const url = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${element}/words`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


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
          console.log(data);
          console.log(element);
        } else {
          console.log("ugurlu deyil");
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }finally {
        // Set loading to false once data is fetched (success or error)
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [url]);


  const urlCategory = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/category/${element}`;
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



  return (
    <div  >
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
        <div >
           <Breadcramb 
              categoryId={categoryData.id}
              categoryName={categoryData.name}
           
            />
            <Row className='my-3' gutter={[16, 16]}>
              {data.map((word) => (
                <Col className='card-col' key={word.id} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                  {word.refered_back!=null ? (
                    <Link to={`/category/${word.category_id}/words/${word.refered_back}`}>
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
        </div>
      )}
    </div>
    </Flex>
  </div>
  )
}

export default AllCategoryWords
