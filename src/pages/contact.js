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
                  <MDBIcon color="secondary" fab icon="facebook-f" />
                </a>
              </li>
              <li>
                <a href="" className="me-4 text-reset">
                  <MDBIcon color="secondary" fab icon="google" />
                </a>
              </li>
              <li>
                <a href="" className="me-4 text-reset">
                  <MDBIcon color="secondary" fab icon="instagram" />
                </a>
              </li>
              <li>
                {" "}
                <a href="" className="me-4 text-reset">
                  <MDBIcon color="secondary" fab icon="linkedin" />
                </a>
              </li>
              <li>
                {" "}
                <a href="" className="me-4 text-reset">
                  <MDBIcon color="secondary" fab icon="youtube" />
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
