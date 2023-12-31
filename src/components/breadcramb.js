import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';


const Breadcramb = ({categoryId, categoryName, wordId, wordName}) => {
  return (
    <div >
         <MDBNavbar  expand='lg' light bgColor='light'>
      <MDBContainer  fluid>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <a style={{fontSize:"16px"}} href='#'>category name</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
          <a style={{fontSize:"16px"}} href={`/category/${categoryId}/words`}>{categoryName}</a>
         </MDBBreadcrumbItem>
         {wordId && wordName && (
              <MDBBreadcrumbItem active>
                <a style={{fontSize:"16px" , fontWeight:"bold"}} href={`/category/${categoryId}/words/${wordId}`}>{wordName}</a>
              </MDBBreadcrumbItem>
            )}
        </MDBBreadcrumb>
      </MDBContainer>
            </MDBNavbar>
      
    </div>
  )
}

export default Breadcramb
