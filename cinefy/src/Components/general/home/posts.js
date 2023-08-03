import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { IconButton, useMediaQuery } from '@mui/material';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import FeaturedCard from './featuredCard';
const data = [
  {
    id: 1,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'Android Development from Zeo to Hero',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'UI/UX Complete Guide',
    rating: 5,
    ratingCount: 15,
    price: 20,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'Mastering Data Modeling Fundamentals',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'The Complete Guide Docker and Kubernetes',
    rating: 4,
    ratingCount: 12,
    price: 30,
    category: 'Intermediate',
  },
  {
    id: 5,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'Modern React with MUI & Redux',
    rating: 4,
    ratingCount: 32,
    price: 35,
    category: 'Intermediate',
  },
  {
    id: 6,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'Ethical Hacking Bootcamp Zero to Mastery',
    rating: 5,
    ratingCount: 14,
    price: 35,
    category: 'Beginner',
  },
  {
    id: 7,
    cover: 'https://source.unsplash.com/random?wallpapers',
    title: 'Adobe Lightroom For Beginners: Complete Photo Editing',
    rating: 4,
    ratingCount: 6,
    price: 25,
    category: 'Beginner',
  },
]
const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const HomePopularCourse = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: React.createElement(SliderArrow, { type: 'prev' }),
    nextArrow: React.createElement(SliderArrow, { type: 'next' }),
    dots: true,
    appendDots: (dots) => React.createElement(StyledDots, null, dots),
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  };

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                Most Popular Courses
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <FeaturedCard key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePopularCourse;
