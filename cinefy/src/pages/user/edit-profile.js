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
            "linear-gradient(81deg, #211F2E 0%, #33303F 13.67%, #6A615D 70.28%, #C5AE8D 100%)",
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
