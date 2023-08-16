import React, { useEffect, useState } from "react";
import ProfileHeader from "../../user/public-profile/profileHeader";
import Exp from "../../user/public-profile/Expreince";
import Albums from "../../user/public-profile/Albums";
import { Container, ThemeProvider } from "@mui/material";
import Layout from "../../../Layouts/recruiterLayout";
// import { styled } from "styled-components";
import { createTheme, styled } from "@mui/material/styles";
import { useLocation } from "react-router";
import queryString from "query-string";
import { getUserDetails } from "../../../redux/action";

const ViewProfile = () => {
    const [data, setData] = useState()
    const location = useLocation();
    const queryParams = queryString.parse(location.search)
  const Tainer = styled(Container)({});
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", ""].join(","),
    },
  });
  useEffect(()=>{
 getUserDetails(queryParams.id).then((res)=>setData(res))
  },[])
  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <Tainer>
            <ProfileHeader data={data} />
            <Exp />
            <Albums />
          </Tainer>
        </ThemeProvider>
      </Layout>
    </>
  );
};

export default ViewProfile;
