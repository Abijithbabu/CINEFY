import React from "react";
import styled from "styled-components";
import Robot from "../../../assets/robot.gif";
import { Typography } from "@mui/material";
export default function Welcome({userName}) {

  return (
    <Container >
      <img src={Robot} alt="" />
      <H2>
       <b> Welcome, <span>{userName}!</span></b>
      </H2>
      <H2 sx={{fontSize:'11px',mb:0}}> Messages are end-to-encrypted. No one outside of this chat not even cinefy can read them. </H2>
      <H2 sx={{fontSize:'11px', pt:0}}>select a chat to Start messaging.</H2>
    </Container>
  );
}
const H2 = styled(Typography)({
  variant: "h6",
  color: "#000", 
  paddingLeft: "15px",
  paddingTop: "5px",
  align:"center",
  fontFamily:"inherit",
  font:"400"
});
const Container = styled.div`
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
