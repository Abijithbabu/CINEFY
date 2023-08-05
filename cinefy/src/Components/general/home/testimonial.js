import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'

import TestimonialItem from './testimonialitem'
const data = [
  {
    id: 1,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: 'https://source.unsplash.com/random?wallpapers',
    },
  },
  {
    id: 2,
    title: 'Best Quality Online Course!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: 'https://source.unsplash.com/random?wallpapers', 
    },
  },
  {
    id: 3,
    title: 'Very complete class',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Designer',
      photo: 'https://source.unsplash.com/random?wallpapers',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: 'https://source.unsplash.com/random?wallpapers',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: 'https://source.unsplash.com/random?wallpapers',
    },
  },
  {
    id: 5,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Back-End Developer',
      photo: 'https://source.unsplash.com/random?wallpapers',
    },
  },
]

const SliderArrow = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
      display ='none'
    >
      {/* {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />} */}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeTestimonial = () => {
  const sliderRef = useRef(null)

  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div></div>, 
    nextArrow: <div></div>,  
  }

  return (
    <Box id="testimonial" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 36, md: 46 },
                mt: { xs: 0, md: 7 },
                mb: 4,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Testimonial What our{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Students{' '}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    left: 2,
                    '& img': { width: { xs: 130, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* <img src="/images/headline-curve.svg" alt="Headline curve" /> */}
                </Box>
              </Typography>
              Say
            </Typography>

            <StyledSlickContainer>
              <Slider ref={sliderRef} {...sliderConfig}>
                {data.map((item, index) => (
                  <TestimonialItem key={String(index)} item={item} />
                ))}
              </Slider>
            </StyledSlickContainer>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
              <img src='https://source.unsplash.com/random?wallpapers' width={520} height={540} quality={97} alt="Testimonial img" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeTestimonial