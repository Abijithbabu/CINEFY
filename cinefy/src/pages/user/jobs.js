import React from "react";
import Header from "../../Layouts/header/header";
import Footer from "../../Layouts/footer/footer";
import Album from "../../Components/general/jobs/cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import Filiter from "../../Components/general/jobs/filiter";
import styled from "@emotion/styled";
import MachCard from "../../Components/general/jobs/MachCard";



const Page = styled(Box)({
  background:
    "linear-gradient(228deg, #737373 6.74%, #0D2C26 100%)"
});

const FiliterContainer = styled(Container)({  });

const LeftSide = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "140px",
  margin: { sx: 1, sm: 1, md: 0, lg: 0, xl: 0 },
  marginTop: { md: 2, lg: 2, xl: 2 },
  marginLeft: { md: 2, lg: 2, xl: 2 },
});

function jobs() {
  return (
    <>
      <Page>
        <FiliterContainer>
          <Header />
          <Grid container spacing={0}>
            <Grid item xs={12} md={4} marginTop={9}>
              <Typography>Filiter</Typography>
              <Filiter />
            </Grid>
            <Grid item xs={12} md={8}>
              <LeftSide><MachCard/><MachCard/><Album /></LeftSide>
            </Grid>
          </Grid>
          <Footer />
        </FiliterContainer>
      </Page>
    </>
  );
}

export default jobs;
