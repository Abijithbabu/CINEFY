import React from "react";
import { styled } from "@mui/material/node/styles";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/node/Box";
import { useSelector } from "react-redux";

const H2 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding-top: px;
  font-size: 30px;
  padding-left: 0px;
  color: "#F1F1F1";
`;

const H3 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: 10px;
  font-size: 14px;
  padding-left: 0px;
  color: "#F1F1F1";
`;

const Tainer = styled(Container)({});

const LeftSide = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  margin: { sx: 0, sm: 0, md: 0, lg: 0, xl: 0 },
  marginTop: { md: 2, lg: 2, xl: 2, sx: 0 },
  marginLeft: { md: 2, lg: 2, xl: 2 },
});

const styles = {
  card: {
    marginTop: "10px",
    position: "relative",
  },
  avatar: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "",
    borderRadius: "5px",
    width: "90px",
    height: "100px",
    fontSize: "2rem",
    border: "2px solid white",
  },
  cardContent: {
    marginTop: "0px", // Adjust as needed
  },
}; 

const ProfileHeader = ({data}) => {

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={3} marginTop={1}>
        <Avatar
              sx={styles.avatar}
              aria-label="recipe"
              zIndex={0}
              src={data?.profilePic} 
            />
        </Grid>
        <Grid item xs={12} md={7.5} sm={12}>
          <LeftSide paddingLeft={20}>
            <H2 paddingTop={13}>{data?.name}</H2> 
            <H3 >
              Hello,I am a full-stack web developer. I adhere to the MVC
              standard rule in my projects to facilitate modification and
              understanding for all developers involved. 
            </H3>
          </LeftSide>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileHeader;
