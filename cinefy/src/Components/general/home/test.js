import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const Tainer = styled(Box)({
  // content: "",
  // display: "table",
  // clear: "both",
  // width:'100%',
})
//banner main div's
const RightContainer = styled(Box)({
  padding: '50px 40px 0',
  
  // maxWidth: "406px",
  background: 'blue',
  float: "left" ,
  width: "50%" ,
  height: "300px" ,
  // position='relative',
  // alignItems:'right',
  // float: 'right',
  // background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7937853107344632) 33%, #f7f7f7)',
})
const LeftContainer = styled(Box)({
  
  // display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',  

  // gap:'1',
  background:"red",
  float: "left" ,
  width: "50%" ,
  padding: "10px" ,
  height: "300px" ,
  
})
// wirte side div's
  const ImageSlot = styled(Box)(({ minWidth, height, background, delay }) => ({
    minWidth,
    height,
    margin:"px",
    flexShrink: 0,
    borderRadius: background.includes('90px') ? '0px 0px 0px 0px' : '',
    background,
    boxShadow: '0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)',
    animation: `fadeIn 1s ease-in-out ${delay}s`,
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    }
  }));

// left side div 

const Line = styled(Box)({
  marginTop: '20px',
  width: '462px',
  height: '1px',
  background: 'rgba(151, 151, 151, 0.60)',
});

const Heading = styled(Typography)({
  color: '#000',
  fontFamily: '',
  fontSize: '72px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
});

const Subheading = styled(Typography)({
  color: '#000',
  fontFamily: 'Gilroy',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '135.2%',
  marginTop: '100px'
});

const Content = styled(Typography)({
  color: '#000',
  fontFamily: 'Gilroy',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '135.2%',
});

const BtnContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
  marginTop: '15px',
});

const Banner = () => {
  return (
    <Container > 
      <Tainer>  
        <RightContainer >
          <Heading>Artisto Club</Heading>
          <Content>
            Ever dream of being a star, then you are in the right place. Artistoclub is an exclusive platform where you as an artist, whether it is an actor, director, writer, singer, editor, choreographer, etc. can find loads of genuine opportunities in multimedia and can apply for it securely. The platform supports you in all the ways to achieve your dream and passion
          </Content>
          <Line />
          <BtnContainer>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </BtnContainer>
          <Subheading>Have any questions? Contact us!</Subheading>
        </RightContainer>
        <LeftContainer >
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap:'1'}} display="flex " alignItems="lef" justifyContent="center">
            <ImageSlot delay={1.2} sx={{ borderRadius: '100px 0 0 0' }}  Width='80%'  height="80%" background="url('artisto.jpg'), lightgray 50% / cover no-repeat" />
            <ImageSlot delay={0.4} sx={{ borderRadius: '0px 0 0 50px' }} width="70%" height="60%" background="url(image-1689571769995-678548689Screenshot (38).png), lightgray -105.669px 0px / 191.083% 100% no-repeat" />
            <ImageSlot delay={0.6} sx={{ borderRadius: '0 0 0 90px' }} minWidth="122px" height="142px" background="url(logo512.png), lightgray 50% / cover no-repeat" />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }} display="felx" alignItems="center" justifyContent="center">
            <ImageSlot delay={0.4} sx={{ borderRadius: '24px' }} width="56px" height="56px" background="url(<path-to-image>), lightgray 50% / cover no-repeat" />
            <ImageSlot delay={0.6} sx={{ borderRadius: '0 100px 0 0' }} width="162px" height="162px" background="url(/images/vijay.jpg>), lightgray 50% / cover no-repeat" />
            <ImageSlot delay={0.1} sx={{ borderRadius: '0 0 60px 0' }} width="90px" height="110px" background="\images\vijay.jpg" />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px' }} display="flex" alignItems="center" justifyContent="center">
            <ImageSlot delay={0.8} sx={{ borderRadius: '0 50px 0 0' }} width="86px" height="86px" background="/images/vijay.jpg " />
            <ImageSlot delay={0.4} sx={{ borderRadius: '0 0 90px 0' }} width="146px" height="146px" background="../public/imges/vijay.jpg" />
          </Box>
        </LeftContainer>
      </Tainer>
    </Container>
  );
};

export default Banner;