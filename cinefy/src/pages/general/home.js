import React from "react";
import Header from "../../Layouts/header/header";
import Test from "../../Components/general/home/test";
import Footer from "../../Layouts/footer/footer";
import Post from "../../Components/general/home/posts";
import Features from "../../Components/general/home/feature";
import HomeTestimonial from "../../Components/general/home/testimonial";
import HomeBan from "../../Components/general/home/homeBan";
import { Box, Container, Grid, Typography, createMuiTheme } from "@mui/material";
import { styled } from "styled-components";
import { ThemeProvider } from '@mui/system';
import Recommed from "../../Components/general/home/Recommed";
import { motion } from "framer-motion";
import TextBanner from "../../Components/general/home/textBanner";


const LeftSide = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "30px",
  margin: { sx: 0, sm: 0, md: 0, lg: 0, xl: 0 },
  marginTop: { md: 2, lg: 2, xl: 2, sx: 0 },
  marginLeft: { md: 2, lg: 2, xl: 2 },
});
const home = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Poppins', ''].join(','),
    },
  });
  return (
    <>
      <Container sx={{background:""}}>
      <ThemeProvider theme={theme}>
        <Header />
        {/*  */}
        {/* <Test/>  */}
        <Grid container spacing={0}>
          <Grid item xs={12} md={7.5} sm={12}>
            <LeftSide>
              <HomeBan />
            </LeftSide>
          </Grid>
          <Grid item xs={12} md={4} marginTop={11}>
            
            <TextBanner/>
          </Grid>
        </Grid>
        <Recommed  marginBottom={10}></Recommed>

        
        {/* <Features/>
      <HomeTestimonial/> */}
        
        </ThemeProvider>
      </Container>
      <Footer marginTop={10}/>
    </>
  );
};

export default home;
