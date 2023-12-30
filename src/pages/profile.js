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
      <div className="profile-main">
      <div className="side-bar">
        <div className="profile-photo-container">
          <img
            src={
              selectedFile
                ? URL.createObjectURL(selectedFile)
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile Photo"
          />

          {/* <div className="edit-icon">
            <FontAwesomeIcon icon={faPen} />
          </div> */}
          <div className="profile-photo-buttons">
  <label className="button-profile-photo">
    Upload Photo
    <input
      type="file"
      style={{ display: "none" }}
      onChange={handleUpload}
    />
  </label>

  <button className="button-profile-photo" onClick={handleChange}>
    Change Photo
  </button>

  <button className="button-profile-photo" onClick={handleRemove}>
    Remove Photo
  </button>
</div>

        </div>
        <h2>Full Name</h2>
        <div className="profile-icon-container">
          <div className="profile-heart-icon">
            <FontAwesomeIcon icon={farHeart} />
          </div>
          <div className="profile-exit-icon">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="right-profile">
          <div className="profile-edit-details-container">
            <p>
              <FontAwesomeIcon icon={faPenToSquare} /> Edit Profile Details
            </p>
            <div className="profile-arrow-icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <h2>Personal Info</h2>
          <p>full name: {personalInfo.fullName}</p>
          <p>age: {personalInfo.age}</p>
          <p>email address: {personalInfo.emailAddress}</p>
          <p>phone number: {personalInfo.phoneNumber}</p>
        </div>
        <div className="profile-forms">
          <form action="" className="accountSettings" onSubmit={handleSubmit}>
            <div className="changeEmail">
              <p>Change email address</p>
              <label className="profile-label" htmlFor="newEmail">Update email address</label>
              <input
              className="profile-input"
                type="email"
                id="newEmail"
                name="newEmail"
                placeholder="Enter new Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <hr />

            <div className="changePass">
              <p>Change password</p>
              <label className="profile-label" htmlFor="currentPass">Current Password</label>
              <input
              className="profile-input"
                type="password"
                id="currentPass"
                name="currentPass"
                placeholder="********"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
              />
            </div>

            <div className="newPass">
              <label className="profile-label" htmlFor="newPassword">New Password</label>
              <input
              className="profile-input"
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
            </div>

            <div className="profile-button">
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>

              <button type="submit" className="profile-save-button">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </Layout>
    
  );
};

export default Profile;