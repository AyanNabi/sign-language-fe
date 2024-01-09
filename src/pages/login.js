// LogIn.js

import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox, message } from "antd";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Layout from "../components/Layout/layout";

import "../assets/login.css";

const LogIn = () => {
  
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const onFinish = async (values) => {
    const { email, password, remember } = values;
    console.log("Received values:", values);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign In Successful!", user);
    } catch (error) {
      console.error("Google Sign In Error:", error.message);
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Facebook Sign In Successful!", user);
    } catch (error) {
      console.error("Facebook Sign In Error:", error.message);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email address:");

    try {
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        await sendPasswordResetEmail(auth, email);
        setResetEmailSent(true);
        message.success(
          "Password reset email sent successfully! Check your email."
        );
      } else {
        console.log("Please enter a valid email address.");
        message.error("Please enter a valid email address.");
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        console.error("User with this email not found.");
        message.error(
          "User with this email not found. Please check your email and try again."
        );
      } else {
        console.error("Password reset error:", error.message);
        message.error(
          "Password reset failed. Please check your email and try again."
        );
      }
      setResetEmailSent(false);
    }
  };

  return (
    <Layout>

<div className="login-container">
      <div className="login-frame">
        <h2 className="login-heading">Login</h2>
        <Row className="form">
          <Col xs={24} sm={20} md={16} lg={12} xl={20}>
            <div className="login-form-container">
              <Form
                name="loginForm"
                onFinish={onFinish}
                initialValues={{
                  remember: true,
                }}
                layout="vertical"
              >
                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not a valid email address!",
                    },
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    className="login-text-input"
                    placeholder="sample@jestdili.az"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    className="login-text-input"
                    placeholder="*******"
                  />
                </Form.Item>

                <Form.Item>
                  <div className="login-button">
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        backgroundColor: "#2b2676",
                        fontSize: 16,
                        fontFamily: "Inter",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      Log in
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>

        <div className="login-checkbox-row">
          <div className="login-check-remember">
            <Checkbox className="rememberCheckbox">Remember me</Checkbox>
          </div>
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </div>

        {resetEmailSent && <div className="reset-email-sent-message"></div>}
        <hr />
        <p>OR</p>

        <div className="signIn-button">
          <Button
            onClick={signInWithGoogle}
            style={{
              backgroundColor: "#f0f0f0",
              color: "#2b2676",
              border: "1px solid #2B2676",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Sign in with Google
          </Button>
          <Button
            onClick={signInWithFacebook}
            style={{
              backgroundColor: "#1877f2",
              color: "#fff",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Sign in with Facebook
          </Button>

          <p className="new-user-text" style={{ textDecoration: 'underline', cursor: 'pointer' }}
          //  onClick={}
           >
      New User? Create an account
    </p>
            </div>
      </div>
    </div>
    </Layout>
   
  );
};

export default LogIn;