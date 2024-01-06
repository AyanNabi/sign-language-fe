import React from 'react'
import { Col, Row, Flex } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Breadcramb from '../breadcramb';

import Card from 'antd/es/card/Card';

const UniqueLetterComponent = ({letter}) => {
  const { pathname } = useLocation();

  const CustomCountriesCard = ({  content }) => (
    <Card className='countries-custom-card' content={content} style={{ width: 300 }}>
      <p  style={{ color: 'black' }}>{content}</p>
    </Card>
  );

  const urlLetter = `https://morning-plains-82582-f0e7c891044c.herokuapp.com/alphabet/${letter}`;

  const [letterData, setLetterData] = useState([]);


//fetch category datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlLetter, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setLetterData(responseData);
          console.log(letterData);
        } else {
          console.error('API error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } 
    };

    fetchData();
  }, [urlLetter]); 




  return (
      <>
   <Flex gap="small" vertical>
{pathname.includes('/category') ? (
          <Breadcramb 
          topCategoryName="All Categories"
          categoryId="2"
          categoryName="b"
          />
      ) : pathname.includes('/sentence') ? (
        <Breadcramb 
        topCategoryName="Sentences"
        categoryId="2"
        categoryName="b"
        />
       
      ) : pathname.includes('/alphabet') ? (
        <Breadcramb 
        topCategoryName="Alphabet"
        categoryId="2"
        categoryName="b"
        />
      ) : (
        // Render content when the path does not include "/category", "/sentence", or "/alphabet"
        <div>
          <h1>Not a Category, Sentence, or Alphabet Page</h1>
          {/* Other content specific to when the path does not include "/category", "/sentence", or "/alphabet" */}
        </div>
      )}

       <Row>
      <Col style={{border:"1px solid"}} span={12} push={12}>
      <ImageListItem key="https://images.unsplash.com/photo-1563298723-dcfebaa392e3">
        <img
          srcSet={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format`}
          alt="title"
          loading="lazy"
        />
        <ImageListItemBar position="below" title="Christian Mackie" />
      </ImageListItem>
      
      </Col>
    <Col style={{border:"1px solid"}} span={12} pull={12}>
    
    </Col>
  </Row>

  <Row className='my-3' gutter={[16, 16]}>
  {letterData && letterData.words ? (
    letterData.words.map((word) => (

      <Col key={word.id} className='card-col' xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
        {word.refered_back != null ? (
          <Link to={`/category/${word.category_id}/words/${word.refered_back}`}>
            <CustomCountriesCard catName="Ayan" id={word.id} content={`${word.word_name} (refer_name)`} />
          </Link>
        ) : word.word_name.endsWith('daktil') ? (
          <CustomCountriesCard catName="Ayan" id={word.id} content={word.word_name} />
        ) : (
          <Link to={`/category/${word.category_id}/words/${word.id}`}>
            <CustomCountriesCard catName="Ayan" id={word.id} content={word.word_name} />
          </Link>
        )}
      </Col>
    ))
  ) : (
    // Render fallback content when letterData or letterData.words is undefined
    <p>No words available</p>
  )}
</Row>

            </Flex>
  </>

    
  )
}

export default UniqueLetterComponent
