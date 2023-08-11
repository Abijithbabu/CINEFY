import { Typography } from "@mui/material";
import Box from "@mui/material/node/Box";
import { styled } from "@mui/material/node/styles";
import React from "react";
import { motion } from "framer-motion";

const H1 = styled(Typography)({
  variant: "body1",
  color: "#000",
  paddingLeft: "1px",
  paddingTop: "1px",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontSize: "20px",

  fontWeight: "800px",
  lineHeight: "normal",
});

const Tainer = styled(motion(Box))({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",
  marginTop: "50px",
  marginLeft: "80px",
  marginBottom: "80px",
});

const H2 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: 5px;
  font-size: 13px;
  padding-left: 0px;
  color: "#000";
`;

const Btn = styled(motion(Box))({
  borderRadius: "5px",
  width: "90px",
  marginTop: "7px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #858585",
  background: "#F1F1F1",
});

function Albums() {
  return (
    <div>
      <H1 varient="h">Albums</H1>
      <Tainer>
        <Box sx={{ position: "relative", right: "0px" }}>
          <Box
            maxWidth={560}
            borderRadius={1}
            sx={{
              // height: { xs: 200, sm: 200, md: 200, xl: 200 },

              // boxShadow: "0px 0px 50px 10px rgba(0, 0, 0, 0.17)",
              // background: "url('https://source.unsplash.com/random?wallpapers'), gray",
              // borderRadius: "2px",
              // backgroundSize: "100%, 20px",
              // backgroundRepeat: "no-repeat, no-repeat",
              // backgroundPosition: "bottom",
            }}
          > <video src="https://youtu.be/U5fcrFz6Ma0?t=12" controls /></Box>
          <Box
            maxWidth={460}
            borderRadius={1}
            sx={{
              height: { xs: 200, sm: 200, md: 200, xl: 200 },
              marginTop: "30px",
              marginLeft: "100px",
              boxShadow: "0px 0px 50px 10px rgba(0, 0, 0, 0.17)",
              background: "url('https://source.unsplash.com/random?wallpapers'), gray",
              borderRadius: "2px",
              backgroundSize: "100%, 20px",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "bottom",
            }}
          ></Box>
        </Box>
        <Box>
          <Box width={473} padding={2}>
            <H1>About</H1>
            <H2 width={300}>
              Hello,I am a full-stack web developer. I adhere to the MVC
              standard rule in my projects to facilitate modification and
              understanding for all developers involved.
            </H2>
          </Box>
          <Box
            maxWidth={160}
            borderRadius={1}
            sx={{
              height: { xs: 200, sm: 200, md: 200, xl: 200 },
              marginTop: "10px",
              marginLeft: "20px",
              boxShadow: "0px 0px 50px 10px rgba(0, 0, 0, 0.17)",
              background: "url('https://source.unsplash.com/random?wallpapers'), gray",
              borderRadius: "2px",
              backgroundSize: "100%, 20px",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundPosition: "bottom",
            }}
          ></Box>
        </Box>
      </Tainer>
    </div>
  );
}

export default Albums;
