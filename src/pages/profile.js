import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faPen,
  faPenToSquare,
  faArrowRight,
  faEnvelope as farEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import {Col, Row, Button, Form, Input, message, Space } from "antd";
import Layout from "../components/Layout/layout";
import axios from "axios";

import "../assets/profile.css";

const Profile = () => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

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
  const [newPasswordError, setNewPasswordError] = useState("");

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

    console.log("Cached Photo URL:", cachedPhoto);

    if (cachedPhoto) {
      const byteCharacters = atob(cachedPhoto.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });

      const file = new File([blob], "profilePhoto.png", { type: "image/png" });

      setSelectedFile(file);
    }
  }, []);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        localStorage.setItem("profilePhoto", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const validateNewPassword = (value) => {
    if (!regex.test(value)) {
      setNewPasswordError("Password does not match the required format");
      console.log("password sehvdi");
      return false;
    } else {
      setNewPasswordError("");
      console.log("password duzdu");

      return true;
    }
  };

  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    validateNewPassword(value);
    setNewPassword(value);
  };

  const handleCancel = () => {
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateNewPassword(newPassword)) {
      // Password validation failed, don't submit the form
      return;
    }

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
      setNewPasswordError("");
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
    localStorage.removeItem("profilePhoto");
    console.log("Removing profile photo");
  };

  return (
    <Layout>
 <Row justify="center">
    <Col
      xs={{ span: 24, offset: 0 }}
      lg={{ span: 7, offset: 0 }}
      style={{
        display: "flex",
        margin: "10px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     <div style={{ textAlign: "center" }}>
          <div
            className="circular"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: selectedFile
                ? `url("${URL.createObjectURL(selectedFile)}") center/cover`
                : 'url("https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg") center/cover',
              backgroundSize: "cover",
              border: "2px solid #000", // Add a border with a 2px width and black color
            }}
          />
        </div>

      <Col>
        <div className="profile-photo-buttons">
          <Row>
            {!selectedFile && (
              <label className="button-profile-photo">
                Upload Photo
                <input type="file" style={{ display: "none" }} onChange={handleUpload} />
              </label>
            )}
            {selectedFile && (
              <button className="button-profile-photo" onClick={handleChange}>
                Change Photo
              </button>
            )}
          </Row>
          {selectedFile && (
            <Row>
              <button className="button-profile-photo" onClick={handleRemove}>
                Remove Photo
              </button>
            </Row>
          )}
        </div>
      </Col>

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
      <Col
        xs={{ span: 24, offset: 0 }}
        lg={{ span: 12, offset: 0 }}
        // style={{ border: "1px solid green" }}
      >
        <Row className="profile-box">
          <Col
            className="first-frame"
            xs={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            // style={{ border: "1px solid red", margin: "5px" }}
          >
            <p>
              <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile Detail{" "}
              <FontAwesomeIcon
                className="profile-arrow-icon"
                icon={faArrowRight}
              />
            </p>
            <h4 className="profile-heading">Personal Info</h4>
            <Row className="fullname">
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                Full name
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
              >
                :
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
              >
                {personalInfo.fullName}
              </Col>
            </Row>
            <Row className="age">
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                Age
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
              >
                :
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
              >
                {personalInfo.age}
              </Col>
            </Row>
            <Row className="email">
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                Email address
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
              >
                :
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
              >
                {personalInfo.emailAddress}
              </Col>
            </Row>
            <Row className="phonenumber">
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                Phone number
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 4, offset: 0 }}
                lg={{ span: 4, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
              >
                :
              </Col>
              <Col
                className="custom-col1"
                xs={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                xl={{ span: 6, offset: 0 }}
              >
                {personalInfo.phoneNumber}
              </Col>
            </Row>
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 12, offset: 0 }}
            style={{}}
          >

<Row justify="center" align="middle" style={{ height: "100%" }}>
  <Form
    name="accountSettingsForm"
    className="profile-accountSettings"
    onFinish={handleSubmit}
  >
    <div className="changeEmail">
      <p>
        <FontAwesomeIcon icon={farEnvelope} /> Change email address
      </p>
      <Row>
        <Form.Item
          name="newEmail"
          label="Update email address"
          rules={[
            { required: true, message: 'Please enter new email address!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
        >
          <Input
            className="profile-input edit-input"
            placeholder="Enter new Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Item>
      </Row>
    </div>
    <hr />

    <div className="changePass">
      <p>Change password</p>
      <Row>
        <Form.Item
          name="currentPass"
          label="Current Password"
          rules={[
            { required: true, message: 'Please enter current password!' },
          ]}
        >
          <Input.Password
            className="profile-input edit-input"
            placeholder="********"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </Form.Item>
      </Row>
    </div>

    <div className="newPass" style={{ marginBottom: "20px" }}>
<Form.Item
  name="newPassword"
  label="New Password"
  hasFeedback
  validateStatus={newPasswordError ? 'error' : ''}
  help={newPasswordError}
  rules={[
    { required: true, message: 'Please enter new password!' },
    { validator: (_, value) => validateNewPassword(value) },
  ]}
>
  <Input.Password
    className="profile-input edit-input"
    style={{ width: "80%" }}
    placeholder="Enter new password"
    value={newPassword}
    onChange={handleNewPasswordChange}
    onBlur={() => validateNewPassword(newPassword)}
  />
</Form.Item>

    </div>

    <Row>
      <div className="profile-button">
        <Space>
          <Button
            type="button"
            onClick={handleCancel}
            style={{
              borderColor: "#2B2676",
              backgroundColor: "white",
              borderRadius: "5px",
              width: "100px",
              height: "40px",
            }}
          >
            Cancel
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            className="profile-save-button"
            style={{
              borderRadius: "5px",
              width: "200px",
              height: "40px",
            }}
          >
            Save Changes
          </Button>
        </Space>
      </div>
    </Row>
  </Form>
</Row>

          </Col>
        </Row>
      </Col>
    </Row>
    </Layout>
      
  );
};

export default Profile;