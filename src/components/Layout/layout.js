import React from 'react'
import Navbar from '../navbar-components/navbar'
import Footer from '../footer-component/footer'

const Layout = ({children}) => {
  return (
  <>
   <Navbar></Navbar>
    {children}
    <Footer></Footer>
  </>
  )
}

export default Layout
