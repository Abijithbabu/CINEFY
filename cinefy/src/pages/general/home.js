import React from 'react'
import Header from '../../Layouts/header/header'
import Test from '../../Components/general/home/test'
import Footer from '../../Layouts/footer/footer'
import Post from '../../Components/general/home/posts'
import Features from '../../Components/general/home/feature' 
import HomeTestimonial from '../../Components/general/home/testimonial'
import HomeBan from '../../Components/general/home/homeBan'

const home = () => {

  return (
    <>
      <Header/>
      <Post/>
      <Test/> 
  {/* <HomeBan/> */}
      <Features/>
      <HomeTestimonial/>
      <Footer/>
    </>
  )
}

export default home
 