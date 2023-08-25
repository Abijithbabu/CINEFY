import React, { useEffect, useState } from "react";
import Exp from "./cards";
import { Container, ThemeProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles"
import { getPosts } from "../../../utils/api";
import {ApexChart} from './apexChart'
const Tainer = styled(Container)({});
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", ""].join(","),
  },
});

const Hero = () => {
  const [ data, setData] = useState([])
  useEffect(() => {
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
