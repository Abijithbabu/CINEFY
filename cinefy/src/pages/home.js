import React from 'react'
import Header from '../Layouts/header'
import Test from '../Layouts/home/test'
import Footer from '../Layouts/footer'
import Post from '../Layouts/home/posts'
import Calender from '../Layouts/home/calender'


const home = () => {

  return (
    <div>
      <Header/>
      <Test/>
      <Post/>
      <Footer/>
    </div>
  )
}

export default home
 