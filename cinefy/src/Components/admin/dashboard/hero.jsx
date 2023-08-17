import React, { useEffect, useState } from "react";
import Exp from "./cards";
import Albums from "../../user/public-profile/Albums";
import { Container, ThemeProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { useLocation } from "react-router";
import queryString from "query-string";
import { getPosts, getUserDetails } from "../../../redux/action";
import {ApexChart} from './components/apexChart'
const Tainer = styled(Container)({});
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", ""].join(","),
  },
});

const Hero = () => {
  const [ data, setData] = React.useState([]);
  React.useEffect(() => {
    try {
      const fetchData = async () => {
        await getPosts().then((res) => res && setData(res));
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
        <ThemeProvider theme={theme}>
          <Tainer>
            <Exp post={data?.length}/>
            <ApexChart data={data}/>
          </Tainer>
        </ThemeProvider>
    </>
  );
};

export default Hero;
