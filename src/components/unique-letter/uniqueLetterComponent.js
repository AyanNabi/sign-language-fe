import React from 'react'
import { Col, Row, Flex, Button } from 'antd';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { Modal } from 'antd';

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


  // const [previewVisible, setPreviewVisible] = useState(false);

  // const handleOpenPreview = () => {
  //   setPreviewVisible(true);
  // };

  // const handleClosePreview = () => {
  //   setPreviewVisible(false);
  // };

  
  // const handleImageClick = (e) => {
  //   // Prevent the default click behavior of the image
  //   e.preventDefault();
  //   // Open the preview manually when the image is clicked
  //   handleOpenPreview();
  // };

  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenPreview = () => {
    setModalVisible(true);
  };

  const handleClosePreview = () => {
    setModalVisible(false);
    // Reset zoom level when closing the modal
    setZoomLevel(1);
  };
  const handleZoomIn = () => {
    // Limit zoom in to 4 times
    if (zoomLevel < 2) {
      setZoomLevel((prevZoom) => Math.min(4, prevZoom + 0.1));
    }
  };

  const handleZoomOut = () => {
    // Restrict zoom out when modal is first opened
    if (modalVisible && zoomLevel > 1) {
      setZoomLevel((prevZoom) => Math.max(1, prevZoom - 0.1));
    }
  };



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
        categoryName={letter}
        />
      ) : (
        // Render content when the path does not include "/category", "/sentence", or "/alphabet"
        <div>
          <h1>Not a Category, Sentence, or Alphabet Page</h1>
          {/* Other content specific to when the path does not include "/category", "/sentence", or "/alphabet" */}
        </div>
      )}

       <Row>
      <Col span={12} push={6}>
      {/* <ImageListItem key="/media/pics/alphabet/Aletter.jpg">
    
        <img
          srcSet='/media/pics/alphabet/Aletter.jpg'
          src='/media/pics/alphabet/Aletter.jpg'
          alt="title"
          loading="lazy"
        />
        <ImageListItemBar position="below" title="Christian Mackie" />
      </ImageListItem> */}
      
      </Col>
    <Col style={{ display:"flex", justifyContent:"center"}} span={12} pull={6} >
    {/* <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <Image width={500} src="/media/pics/alphabet/Aletter.jpg" />
   
  </Image.PreviewGroup> */}

 
  
{/*   

<div onClick={handleImageClick}>
        <Image
          width={500}
          src="/media/pics/alphabet/Aletter.jpg"
          preview={{
            visible: previewVisible,
            onVisibleChange: (visible) => {
              setPreviewVisible(visible);
            },
            mask: null, // Set mask to null to disable hover and click effects
          }}
        />
      </div>
       */}


      <img
          alt="Preview"
          src="/media/pics/alphabet/Aletter.jpg"
          style={{ width: '500px', height: 'auto' }}
        />
    

      <Modal
    width= "800px"
        visible={modalVisible}
        onCancel={handleClosePreview}
        footer={null}
        style={{  transform: `scale(${zoomLevel})`

      
      }}
      >
         <div style={{ textAlign: 'center' }}>
          <Button onClick={handleZoomIn}>Zoom In</Button>
          <Button onClick={handleZoomOut} style={{ marginLeft: 16 }}>
            Zoom Out
          </Button>
        </div>


        <img
          alt="Preview"
          src="/media/pics/alphabet/Aletter.jpg"
          style={{ width: '100%', height: 'auto', marginTop: 16}}
        />
      </Modal>
  
    <Button onClick={handleOpenPreview}>Open Image Preview</Button>
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
