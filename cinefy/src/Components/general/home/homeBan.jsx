import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, LinearProgress } from "@mui/material";
import { ThemeProvider, styled } from "styled-components";

const H1 = styled(Typography)({
  fontFamily: ['Poppins', 'sans-serif'].join(","),
  padding: "0px",
  fontSize: "30px",
  fontWeight: "500",
  paddingTop: "14px",
});

const HomeBan = () => {
  const images = ["https://source.unsplash.com/random?wallpapers","https://img.freepik.com/free-vector/modern-black-friday-super-sale-with-red-splash-banner-design_1361-2784.jpg?q=10&h=200"]; // Replace with your image URLs
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <Box
        borderRadius={1}
        sx={{
          height: { xs: 200, sm: 200, md: 250, lg: 300, xl: 310 },
          marginTop: "80px",
          background: `url('${images[currentIndex]}'), #000)`,
          borderRadius: "1px",
          backgroundSize: "115%, 20px",
          backgroundRepeat: "no-repeat, no-repeat",
          boxShadow: "0px 0px 50px 10px rgba(0, 0, 0, 0.27)",
          backgroundPosition: "bottom",
          position: "relative",
        }}
      >
        <AnimatePresence initial={false}>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute", // Maintain the same position
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )
          ))}
        </AnimatePresence>
        
        <LinearProgress
          variant="determinate"
          value={progress} 
          color="secondary" 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "20%",
            marginTop:"20px",
            marginLeft:"20px",
          }}
        />
        
      </Box>
      <H1>Download the app to get notified</H1>
    </div>
  );
};

export default HomeBan;
