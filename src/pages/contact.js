import React from 'react'
import Layout from '../components/Layout/layout';
import '../assets/contact.css';


// const Contact = () => 
export default function Contact() {
  return (
<Layout>
<section>
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src='' alt='img'></img></span>
                <span>Ahmadbey Aghaoglu str. 61<br />
                Baku, AZ <br />
                1008</span>
              </li>
              <li>
                <span><img src='' alt='img'></img></span>
                <span>info@jestdili.az</span>
              </li>
              <li>
                <span><img src='' alt='img'></img></span>
                <span>+994 55 555 55 55</span>
              </li>
            </ul>
          </div>
          <ul className="social">
            <li><a href="#"><img src='' alt='img'/></a></li>
            <li><a href="#"><img src='' alt='img'/></a></li>
            <li><a href="#"><img src='' alt='img'/></a></li>
            <li><a href="#"><img src='' alt='img'/></a></li>
            <li><a href="#"><img src='' alt='img'/></a></li>
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
      {/* <Footer/> */}
    </section>
</Layout>
 
  )
}
