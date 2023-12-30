import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPenToSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout/layout";

import axios from "axios";
import "../assets/profile.css";
import { Col, Row, Button, Form, Input, message, Space } from "antd";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    age: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/personalInfo");
        setPersonalInfo(response.data);
      } catch (error) {
        setError("Error fetching personal information");
        console.error("Error fetching personal information:", error);
      }
    };

    fetchPersonalInfo();
  }, []);

  useEffect(() => {
    const cachedPhoto = localStorage.getItem("profilePhoto");

    if (cachedPhoto) {
      setSelectedFile(
        new File([cachedPhoto], "profilePhoto", { type: "image/png" })
      );
    }
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      localStorage.setItem("profilePhoto", e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleCancel = () => {
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put("/api/update-profile", {
        email,
        currentPassword,
        newPassword,
      });

      console.log("Profile updated successfully:", response.data);

      setEmail("");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleChange = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.style.display = "none";

    inputElement.addEventListener("change", (event) => {
      handleUpload(event);
    });

    document.body.appendChild(inputElement);
    inputElement.click();
    document.body.removeChild(inputElement);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    console.log("Removing profile photo");
  };

  return (
    <Layout>
  <Row justify="center" style={{ border: '1px solid red' }}>
      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 7, offset: 0 }} style={{ border: '1px solid black', display: 'flex', margin: '10px', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ border: '1px solid red', textAlign: 'center' }}>
        <div className="circular" style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'url("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg") center/cover', border: '1px solid red', backgroundSize: 'cover' }} />
        <div className="user_name">Full Name</div>
      </div>
      <Row justify="center">
        <Col>
          <div className="profile-heart-icon">
          <FontAwesomeIcon icon={farHeart} />
          </div>
        </Col>
        <Col>
          <div className="profile-exit-icon">
          <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </Col>
      </Row>
    </Col>
      <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }} style={{ border: '1px solid green' }}>
        <Row>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 12, offset: 0 }} style={{ border: '1px solid red', margin: '5px' }}>
            <p>
            <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile Detail <FontAwesomeIcon className="profile-arrow-icon" icon={faArrowRight} />
            </p>
            <h4>Personal Info</h4>
            <Row className="fullname">
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
                Full name
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                :
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 6, offset: 0 }}>
              {personalInfo.fullName}
              </Col>
            </Row>
            <Row className="age">
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
                Age
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                :
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 6, offset: 0 }}>
              {personalInfo.age}
              </Col>
            </Row>
            <Row className="email">
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
                Email address
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                :
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 6, offset: 0 }}>
              {personalInfo.emailAddress}
              </Col>
            </Row>
            <Row className="phonenumber">
            <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
                Phone number
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 4, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                :
              </Col>
              <Col xs={{ span: 8, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 6, offset: 0 }}>
              {personalInfo.phoneNumber}
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 11, offset: 0 }} style={{ border: '1px solid red', margin: '5px' }} >
            <Row justify="center" align="middle" style={{ height: '100%' }}>
            <form action="" className="accountSettings" onSubmit={handleSubmit}>
            <div className="changeEmail">
              <p>Change email address</p>
              <Col>
                <Row>
                  <label className="profile-label" htmlFor="newEmail">Update email address</label>
                </Row>
                <Row>
                <input
                className="profile-input edit-input"
                  type="email"
                  id="newEmail"
                  name="newEmail"
                  placeholder="Enter new Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                </Row>
              </Col>
            </div>
            <hr />

            <div className="changePass">
              <p>Change password</p>
              <Col>
                <Row>
                <label className="profile-label" htmlFor="currentPass">Current Password</label>
                </Row>
                <Row>
                  <input
                className="profile-input edit-input"
                  type="password"
                  id="currentPass"
                  name="currentPass"
                  placeholder="********"
                  value={currentPassword}
                  onChange={handleCurrentPasswordChange}
                />
                </Row>
              </Col>
            </div>

            <div className="newPass">
              <Col>
                <Row>
                  <label className="profile-label" htmlFor="newPassword">New Password</label>
                </Row>
                <Row>
                <input
               className="profile-input edit-input"
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
                </Row>
              </Col>
            </div>

            <Row>
              <div className="profile-button">
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>

                <button type="submit" className="profile-save-button">
                  Save Changes
                </button>
              </div>
            </Row>
            </form>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    </Layout>
  
  );
};
export default Profile;