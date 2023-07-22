import React from 'react'
import Header from '../Layouts/header/header'
import Test from '../Layouts/home/test'
import Footer from '../Layouts/footer/footer'
import Post from '../Layouts/home/posts'
import Features from '../Layouts/home/feature' 
import HomeTestimonial from '../Layouts/home/testimonial'

const home = () => {

  return (
    <>
      <Header/>
      <Test/> 
      <Features/>
      <HomeTestimonial/>
      <Post/>
      <Footer/>
    </>
  )
}

export default home
 