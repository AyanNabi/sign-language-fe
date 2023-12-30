import React from 'react'
import { Card} from 'antd'
import { Flex } from 'antd';
import { Col, Row } from 'antd';
import  { useState, useEffect } from "react";
import '../dictionary-alphabet/alphabet.css'
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

  return (

    <div >
    <Flex gap="small" vertical>
      <Row   gutter={[16, 16]}>

      <Col  className='card-col' key={1} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
    <a href=""><CustomCountriesCard content={'word'} />  </a>
      </Col>
     
        
      </Row>
    </Flex>
  </div>



  )
}

export default AllCategoryWords
