import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Card } from 'antd';
import '../blog/leftSide.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);


const LeftSideBlog = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
       

        <MDBRow className='justify-content-center' >
        <MDBCol md='12' className='blog-left-elements'>
        <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
                width: 300,
                padding:"20px 0px",
            }}
            />
         </MDBCol>
        <MDBCol md='12' className='blog-left-elements'>
        <Card  className='left-side-cards'
              title="Category"
              bordered={false}
              style={{
              width: 300,
              color:"black !important"

              }}
          >
            <div className='left-side-top-content'>
              <ul>
               <li>  <Link> Recent Updates</Link></li> 
               <li>  <Link> Terms of Conditions</Link></li> 
               <li>  <Link> Features</Link></li> 
               <li>  <Link> Lorem Ipsum</Link></li> 
               <li>  <Link> Lorem Ipsum</Link></li> 
               <li>  <Link> Lorem Ipsum</Link></li> 
               <li>  <Link> Lorem Ipsum</Link></li> 


             



              </ul>
       

            </div>
             

          </Card>
        </MDBCol>
        <MDBCol md='12' className='blog-left-elements'>
        <Card className='left-side-cards'
              title="Top Posts"
              bordered={false}
              style={{
              width: 300,
              }}
          >
             <div className='left-side-bottom-content'>
              <ul>
               <li>  <Link> 
               
               </Link></li> 

               <li><Link> 
               <div className='d-flex '>
                <div className="left-icon-posts">
                  <img width="50" height="50" src="/logo.jpg" alt="logo" />

                </div>
                <div className='right-icon-posts'>
                  <p className='title-right-post'>Lorem Ipsum</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <p>Recent Updates 2024</p>
                </div>

               </div>
               </Link>
               </li> 

               <li><Link> 
               <div className='d-flex '>
                <div className="left-icon-posts">
                  <img width="50" height="50" src="/logo.jpg" alt="logo" />

                </div>
                <div className='right-icon-posts'>
                  <p className='title-right-post'>Lorem Ipsum</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                  <p>Recent Updates 2024</p>
                </div>

               </div>
               </Link>
               </li> 

               <li><Link> 
               <div className='d-flex '>
                <div className="left-icon-posts">
                  <img width="50" height="50" src="/logo.jpg" alt="logo" />

                </div>
                <div className='right-icon-posts'>
                  <p className='title-right-post'>Lorem Ipsum</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                  <p>Recent Updates 2024</p>
                </div>

               </div>
               </Link>
               </li> 

               <li><Link> 
               <div className='d-flex '>
                <div className="left-icon-posts">
                  <img width="50" height="50" src="/logo.jpg" alt="logo" />

                </div>
                <div className='right-icon-posts'>
                  <p className='title-right-post'>Lorem Ipsum</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                  <p>Recent Updates 2024</p>
                </div>

               </div>
               </Link>
               </li> 




             



              </ul>
       

            </div>
          </Card>
        </MDBCol>
    </MDBRow>
      
    </div>
  )
}

export default LeftSideBlog