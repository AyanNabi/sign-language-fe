// import React from "react";
// import { Col, Row, Divider } from "antd";
// // import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// // import { MDBIcon } from "mdb-react-ui-kit";
// // import Layout from "../components/Layout/layout";
// import "../components/contact/contact.css";

// export default function App() {
//   return (
//     <Divider>
//       <Row>
//       <Col span={12}>col-12</Col>
//       <Col span={12}>col-12</Col>
//     </Row>
//     </Divider>
//       {/* <MDBContainer>
        
//         <MDBRow center>
//           <MDBCol size="4">One of two columns</MDBCol>
//           <MDBCol size="4">One of two columns</MDBCol>
//         </MDBRow>

//       </MDBContainer> */}
   
//   );
// }

// import React from "react";
// import {
//   MDBCard,
//   MDBCardHeader,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import Layout from "../components/Layout/layout";
// import "../components/contact/contact.css";
// import { MDBIcon } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <Layout>
//       <MDBCard>
//         <MDBCardHeader><div className="contactInfo">
//             <div>
//               <h2>Contact Info</h2>
//               <ul className="info">
//                 <li>
//                   <span>
//                   <i class="fas fa-location-dot fa-2x"></i>
//                   </span>
//                   <span>
//                     Ahmadbey Aghaoglu str. 61
//                     <br />
//                     Baku, AZ <br />
//                     1008
//                   </span>
//                 </li>
//                 <li>
//                   <span>
//                   <i class="fas fa-envelope fa-2x"></i>
//                   </span>
//                   <span>info@jestdili.az</span>
//                 </li>
//                 <li>
//                   <span>
//                   <i class="fas fa-phone-volume fa-2x"></i>
//                   </span>
//                   <span>+994 55 555 55 55</span>
//                 </li>
//               </ul>
//             </div>

//             <ul className="contact-social">
//               <li>
//                 <a href="" className="me-4 text-reset">
//                   <MDBIcon color="white" fab icon="facebook-f fa-2x" />
//                 </a>
//               </li>
//               <li>
//                 <a href="" className="me-4 text-reset">
//                   <MDBIcon color="white" fab icon="google fa-2x" />
//                 </a>
//               </li>
//               <li>
//                 <a href="" className="me-4 text-reset">
//                   <MDBIcon color="white" fab icon="instagram fa-2x" />
//                 </a>
//               </li>
//               <li>
//                 {" "}
//                 <a href="" className="me-4 text-reset">
//                   <MDBIcon color="white" fab icon="linkedin fa-2x" />
//                 </a>
//               </li>
//               <li>
//                 {" "}
//                 <a href="" className="me-4 text-reset">
//                   <MDBIcon color="white" fab icon="youtube fa-2x" />
//                 </a>
//               </li>
//             </ul>
//           </div></MDBCardHeader>

//         <MDBCardBody>
//         <div className="contactForm">
//             <h2>Send a Message!</h2>
//             <div className="formBox">
//               <div className="inputBox w50">
//                 <input type="text" required />
//                 <span>First Name</span>
//               </div>
//               <div className="inputBox w50">
//                 <input type="text" required />
//                 <span>Last Name</span>
//               </div>
//               <div className="inputBox w50">
//                 <input type="email" required />
//                 <span>Email Address</span>
//               </div>
//               <div className="inputBox w50">
//                 <input type="tel" required />
//                 <span>Mobile Number</span>
//               </div>
//               <div className="inputBox w100">
//                 <textarea required></textarea>
//                 <span>Type your message here...</span>
//               </div>
//               <div className="inputBox w100">
//                 <input type="submit" value="Send" />
//               </div>
//             </div>
//           {/* <MDBCardTitle>Send a Message!</MDBCardTitle>
//           <MDBCardText>
//             With supporting text below as a natural lead-in to additional
//             content.
//           </MDBCardText>
//           <MDBBtn href="#">Go somewhere</MDBBtn> */}
//           </div>
//         </MDBCardBody>
//       </MDBCard>
//     </Layout>
//   );
// }

import React from "react";
import Layout from "../components/Layout/layout";
import "../components/contact/contact.css";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <Layout>
      <section>
<div className="contact-container">
<div className="contactInfo">
  <div>
    <h2>Contact Info</h2>
    <ul className="info">
      <li>
        <span>
        <i class="fas fa-location-dot fa-2x"></i>
        </span>
        <span>
          Ahmadbey Aghaoglu str. 61
          <br />
          Baku, AZ <br />
          1008
        </span>
      </li>
      <li>
        <span>
        <i class="fas fa-envelope fa-2x"></i>
        </span>
        <span>info@jestdili.az</span>
      </li>
      <li>
        <span>
        <i class="fas fa-phone-volume fa-2x"></i>
        </span>
        <span>+994 55 555 55 55</span>
      </li>
    </ul>
  </div>

  <ul className="contact-social">
    <li>
      <a href="" className="me-4 text-reset">
        <MDBIcon color="white" fab icon="facebook-f fa-2x" />
      </a>
    </li>
    <li>
      <a href="" className="me-4 text-reset">
        <MDBIcon color="white" fab icon="google fa-2x" />
      </a>
    </li>
    <li>
      <a href="" className="me-4 text-reset">
        <MDBIcon color="white" fab icon="instagram fa-2x" />
      </a>
    </li>
    <li>
      {" "}
      <a href="" className="me-4 text-reset">
        <MDBIcon color="white" fab icon="linkedin fa-2x" />
      </a>
    </li>
    <li>
      {" "}
      <a href="" className="me-4 text-reset">
        <MDBIcon color="white" fab icon="youtube fa-2x" />
      </a>
    </li>
  </ul>
</div>

<div className="contactForm">
  <h2>Send a Message!</h2>
  <div className="formBox">
    <div className="inputBox w50">
      <input type="text" required />
      <span>First Name</span>
    </div>
    <div className="inputBox w50">
      <input type="text" required />
      <span>Last Name</span>
    </div>
    <div className="inputBox w50">
      <input type="email" required />
      <span>Email Address</span>
    </div>
    <div className="inputBox w50">
      <input type="tel" required />
      <span>Mobile Number</span>
    </div>
    <div className="inputBox w100">
      <textarea required></textarea>
      <span>Type your message here...</span>
    </div>
    <div className="inputBox w100">
      <input type="submit" value="Send" />
    </div>
  </div>
  </div>
</div>
      </section>
    </Layout>
  );
}
