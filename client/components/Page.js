import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Page = ({ children }) => ( 
  <>
  <Nav />
  { children }
  <Subscribe />
  <Footer />
  </>
)

export default Page