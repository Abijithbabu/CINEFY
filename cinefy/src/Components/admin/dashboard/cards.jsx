import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import { motion } from "framer-motion";

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

const MachingCard = styled(Card)({
  minHeight: "30px",
  marginTop: "3px",
  paddingTop: "0.5px",
  paddingBottom: "px",
  minWidth: "0px",
  maxWidth: "350px",
  fill: "#EFEFEF",
  strokeWidth: "0.1px",
  stroke: "#A9A9A9",
});
const H2 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: px;
  font-size: 20px;
  padding-left: 0px;
  color: "#000";
`;

const H3 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding-top: px;
  font-size: 13px;
  padding-left: 0px;
  color: "#000";
`;
const H1 = styled(Typography)({
  variant: "body1",
  color: "#000",
  paddingLeft: "1px",
  paddingTop: "1px",
  fontFamily: ["Poppins", "sans-serif"].join(","),
  fontSize: "16px",

  fontWeight: "800px",
  lineHeight: "normal",
});

const Inner = styled(Box)({
  paddingRight: "15px",
});

function Exp({ post }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slickNext: false,
    slickPrevious: false,
    swipe: true,
    prevArrow: <div></div>,
    nextArrow: <div></div>,
  };
  const data = [
    {
      title: "Total Customers",
      count: 14,
    },
    {
      title: "Total Recruiters",
      count: 1,
    },
    {
      title: "Total Castings",
      count: post,
    },
    {
      title: "Premium Users",
      count: 2,
    },
  ];
  return (
    <div>
      <Box sx={{ marginTop: "40px", marginBottom: "50px" }}>
        <H2 variant="h" component="h2" sx={{ marginBottom: "30px" }}>
          Admin Dashboard
        </H2>

        <Slider {...settings}>
          {data.map((x, index) => (
            <motion.div
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
              width={90}
              height={100}
            >
              <Inner>
                <MachingCard sx={{ padding: "15px" }}>
                  <motion.div
                    className="item "
                    variants={item}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <H1>{x.title}</H1>
                    <Typography sx={{ fontSize: "50px" }}>
                      {x.count} k
                    </Typography>

                    <H3 variant="h">data fetched</H3>
                  </motion.div>
                </MachingCard>
              </Inner>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </div>
  );
}

export default Exp;
