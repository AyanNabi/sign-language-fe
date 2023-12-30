import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import '../blog/rightSide.css'
  import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
  import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';


  
const RightSideBlog = () => {

  return (
    <div    style={{
      padding:"20px 0px",
  }}>
         <MDBRow style={{marginBottom:"70px "}}>
        <MDBCol  md='6' lg='6' xl='6' >
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage className='w-100'  src='/demo-pic.png' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
      <MDBCardBody>

      <MDBCardTitle className='subtitle-post-card'>Recent Updates - 12/10/2023</MDBCardTitle>

        <MDBCardTitle>Lorem Ipsum</MDBCardTitle>

        
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam totam quas! Rem minima deleniti non accusamus totam, natus, earum nam enim beatae voluptatem eaque!
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </MDBCol>
        <MDBCol   md='6' lg='6' xl='6'>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='w-100' src='/demo-pic.png' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
      <MDBCardBody>

      <MDBCardTitle className='subtitle-post-card'>Recent Updates - 12/10/2023</MDBCardTitle>

        <MDBCardTitle>Lorem Ipsum</MDBCardTitle>

        
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam totam quas! Rem minima deleniti non accusamus totam, natus, earum nam enim beatae voluptatem eaque!
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{marginBottom:"70px "}}>
        <MDBCol  md='6' lg='6' xl='6'>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='w-100' src='/demo-pic.png' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
      <MDBCardBody>

      <MDBCardTitle className='subtitle-post-card'>Recent Updates - 12/10/2023</MDBCardTitle>

        <MDBCardTitle>Lorem Ipsum</MDBCardTitle>

        
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam totam quas! Rem minima deleniti non accusamus totam, natus, earum nam enim beatae voluptatem eaque!
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </MDBCol>
        <MDBCol  md='6' lg='6' xl='6'>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage className='w-100' src='/demo-pic.png' fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
      <MDBCardBody>

      <MDBCardTitle className='subtitle-post-card'>Recent Updates - 12/10/2023</MDBCardTitle>

        <MDBCardTitle>Lorem Ipsum</MDBCardTitle>

        
        <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam totam quas! Rem minima deleniti non accusamus totam, natus, earum nam enim beatae voluptatem eaque!
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </MDBCol>
      </MDBRow>


      <div className='pagination justify-content-center mt-5'>
      <nav aria-label='Page navigation example'>
      <MDBPagination center className='mb-0'>
        <MDBPaginationItem disabled>
          <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
            Prev
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
      </div>
      
   
   
      
    </div>
  )
}

export default RightSideBlog