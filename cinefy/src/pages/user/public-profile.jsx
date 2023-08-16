import React from "react";
import Profile from "../../Components/user/public-profile/page";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import {
  ThemeProvider,
  createMuiTheme,
  styled,
} from "@mui/material/node/styles";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/node/Box";
import ProfileHeader from "../../Components/user/public-profile/profileHeader";
import Exp from "../../Components/user/public-profile/Expreince";
import Album from "../../Components/general/jobs/cards";
import Albums from "../../Components/user/public-profile/Albums";

const Tainer = styled(Container)({});

const page = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Poppins", ""].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Profile /> */}
        <Tainer>
          <Header />
          <ProfileHeader />
          <Exp/>
          <Albums/>
        </Tainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default page;
