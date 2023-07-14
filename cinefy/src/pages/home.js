import React from 'react'
import Header from '../Layouts/header/header'
import Test from '../Layouts/home/test'
import Footer from '../Layouts/footer/footer'
import Post from '../Layouts/home/posts'
import styled from 'styled-components'


const home = () => {
  const Wrapper = styled.div`
.body{
  width:min(100%,950px)
}
h1{
  text-align: center;
  color: violet;
}
button{
  padding: 4px 8px;
  border: none;  
}
`
  return (
    <Wrapper>
      <Header/>
      <Test/> 
      <Post/>
      <Footer/>
    </Wrapper>
  )
}

export default home
 