import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
} from 'mdb-react-ui-kit';
import './navbar.css';


function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

  

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
      <img
      
              src='/logo.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
            <span style={{fontWeight:"bold"}}>Jest Dili</span>

      </MDBNavbarBrand>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenBasic(!openBasic)}
        
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav className='justify-content-end mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/home'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/about'>
              About us
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/dictionary'>
              Dictionary
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/blog'>
              Blog
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/contact'>
              Contact us
            </MDBNavbarLink>
          </MDBNavbarItem>
         
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                AZ
              </MDBDropdownToggle>
              <MDBDropdownMenu className=''>
                <MDBDropdownItem link>AZ</MDBDropdownItem>
                <MDBDropdownItem link>EN</MDBDropdownItem>
                <MDBDropdownItem link>RU</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>

          
        </MDBNavbarNav>

        

        <div className='d-flex input-group w-auto'>

        <Link to="/login">
        <div className='navbar-login-signup navbar-login'><span>Log in</span></div>
        </Link>

       <Link to="/sign">
       <div className='navbar-login-signup navbar-signup'><span> Sign up</span></div>
       </Link>

       

        </div>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>

      )};
export default Navbar;