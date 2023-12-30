import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./navbar.css";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("AZ");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  //   const isLoggedIn = false;

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src="/logo.jpg" height="30" alt="" loading="lazy" />
          <span style={{ fontWeight: "bold" }}>Jest Dili</span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="justify-content-end mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#about-section">
                About us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/dictionary">
                Dictionary
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/blog">
                Blog
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="contact">
                Contact us
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  AZ
                </MDBDropdownToggle>
                <MDBDropdownMenu className="">
                  <MDBDropdownItem link>AZ</MDBDropdownItem>
                  <MDBDropdownItem link>EN</MDBDropdownItem>
                  <MDBDropdownItem link>RU</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link"
                  role="button"
                  onClick={toggleDropdown}
                >
                  {selectedLanguage}
                </MDBDropdownToggle>
                {isDropdownOpen && (
                  <MDBDropdownMenu className="">
                    <MDBDropdownItem link onClick={() => changeLanguage("AZ")}>
                      Azerbaijani
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => changeLanguage("EN")}>
                      English
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => changeLanguage("RU")}>
                      Russian
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                )}
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <div className="d-flex input-group w-auto">
            <div className="navbar-login-signup navbar-login">
              <span>Log in</span>
            </div>
            <div className="navbar-login-signup navbar-signup">
              <span> Sign up</span>
            </div>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;