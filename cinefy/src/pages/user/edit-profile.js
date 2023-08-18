import React from "react";
import Profile from "../../Components/user/editProfile/firstpage";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import { Box } from "@mui/material";

const profile = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "",
        }}
      >
        <Header/>
        <Profile />
        <Footer />
      </Box>
    </>
  );
};

export default profile;
