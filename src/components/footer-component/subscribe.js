import React from 'react'
import './footer.css';
import { MDBFooter,MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Subscribe = () => {
  return (
    <div>
          <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow  style={{flexWrap:"nowrap", alignItems:"center"}}>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                    <h1>What's inside?</h1>
                    <h1>Get on the List!</h1>
                </MDBCol>
                <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                   <MDBInput type='text' id='form5Example2' label='Email address' />
                 </MDBCol>
  
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                    <MDBBtn>Subscribe</MDBBtn>
                </MDBCol>
           
          </MDBRow>
        </form>
      </MDBContainer>

     
    </MDBFooter>
      
    </div>
  )
}

export default Subscribe
