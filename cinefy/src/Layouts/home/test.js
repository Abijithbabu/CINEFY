import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const Tainer = styled(Box)({
  // background:'#000',
  gap: "1",
})
//banner main div's
const RightContainer = styled(Box)({
  padding: '50px 40px 0',
  gap:'1',
  width: "400px",
  alignItems:'right',
  float: 'right',
  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7937853107344632) 33%, #f7f7f7)',
})
const LeftContainer = styled(Box)({
  width :'464',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  margin:'px',
  float : '',
  
})
// wirte side div's
const ImageSlot = styled(Box)(({ $width, $height, $background, $delay }) => ({
  width:$width,
  height: $height,
  flexShrink: 0,
  borderRadius: $background.includes('90px') ? '0px 0px 0px 0px' : '',
  background: $background,
  boxShadow: '0px 4px 11px 0px rgba(192, 189, 189, 0.25), 0px 4px 6px 0px rgba(192, 189, 189, 0.25)',
  animation: `fadeIn 1s ease-in-out ${$delay}s`, // Add animation property with delay
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
    <Container sx={{mt:14}} > 
      <Tainer>  
        <RightContainer position='relative' zIndex={0}>
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
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap:'1'}} display="flex " alignItems="center" justifyContent="center">
            <ImageSlot $delay={1.2} sx={{ borderRadius: '100px 0 0 0' }} $width="166px" $height="166px" $background="url('artisto.jpg'), lightgray 50% / cover no-repeat" />
            <ImageSlot $delay={0.4} sx={{ borderRadius: '0px 0 0 50px' }} $width="114px" $height="114px" $background="url(<path-to-image>), lightgray -105.669px 0px / 191.083% 100% no-repeat" />
            <ImageSlot $delay={0.6} sx={{ borderRadius: '0 0 0 90px' }} $width="142px" $height="142px" $background="url(<path-to-image>), lightgray 50% / cover no-repeat" />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }} display="felx" alignItems="center" justifyContent="center">
            <ImageSlot $delay={0.4} sx={{ borderRadius: '24px' }} $width="76px" $height="76px" $background="url(<path-to-image>), lightgray 50% / cover no-repeat" />
            <ImageSlot $delay={0.6} sx={{ borderRadius: '0 100px 0 0' }} $width="182px" $height="182px" $background="url(/images/vijay.jpg>), lightgray 50% / cover no-repeat" />
            <ImageSlot $delay={0.1} sx={{ borderRadius: '0 0 60px 0' }} $width="130px" $height="130px" $background="\images\vijay.jpg" />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px' }} display="flex" alignItems="center" justifyContent="center">
            <ImageSlot $delay={0.8} sx={{ borderRadius: '0 50px 0 0' }} $width="106px" $height="106px" $background="/images/vijay.jpg " />
            <ImageSlot $delay={0.4} sx={{ borderRadius: '0 0 90px 0' }} $width="166px" $height="166px" $background="../public/imges/vijay.jpg" />
          </Box>
        </LeftContainer>
      </Tainer>
    </Container>
  );
};

export default Banner;