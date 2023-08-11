import React from "react";
import { motion } from "framer-motion";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/node/styles";
import Box from "@mui/material/node/Box";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const H1 = styled(motion(Typography))`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  padding-top: 10px;
  font-size: 60px;
  padding-left: 60px;
  color: "#000";
`;

const H3 = styled(motion(Typography))`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: 10px;
  font-size: 14px;
  padding-left: 60px;
  color: "#000";
`;

const BtnContainer = styled(motion(Box))({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "10px",
  marginTop: "0px",
  marginLeft: "60px",
});

const H2 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 5px;
  font-size: 13px;
  padding-left: 12px;
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

function TextBanner() {
  return (
    <div>
        <motion.div className="container" variants={container}>
      <H1
        color="#030D27"
        variant="h"
        initial={{ x: -800, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        // hidden={{ y: 30, opacity: 0 }}
        // visible={{ y: 0,opacity: 1,}}
      >
        CINEFY
      </H1>
      </motion.div>
      <H3
        variant="body2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        "Realize your star potential with Artistoclub, the ultimate platform for
        artists. Securely explore and apply for authentic multimedia
        opportunities, fueling your passion and dreams."
      </H3>
      <H3
        sx={{ paddingTop: "80px" }}
        variant="body1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 3 }}
      >
        Download the app to get notified
      </H3>
      <BtnContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 4 }}
      >
        <Btn>
          <H2 variant="body">PlayStore</H2>
        </Btn>
        <Btn>
          <H2 variant="body">AppStore</H2>
        </Btn>
      </BtnContainer>
    </div>
  );
}

export default TextBanner;
