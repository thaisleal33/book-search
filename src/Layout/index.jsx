import React from 'react'
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';

import About from '../pages/About';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      <Navbar />
      <GlobalStyles />
    </>
  )
}

export default Layout;