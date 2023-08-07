import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import FeaturedCard from "./featuredCard";
import { getPosts } from "../../../redux/action";

const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: "left",
    "& li": {
      marginRight: theme.spacing(2),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const HomePopularCourse = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("xs"));
  const [data, setData] = React.useState([""]);
  React.useEffect(() => {
    try {
      const fetchData = async () => {
        await getPosts().then((res) => res && setData(res));
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <div />,
    nextArrow: <div />,
    dots: true,
    appendDots: (dots) => React.createElement(StyledDots, null, dots),
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: "divider",
          display: "inline-block",
          borderRadius: 4,
        }}
      />
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
        backgroundColor: "background.default",
      }}
    >
      <Container sx={{ mt: { xs: 0, md: -5, lg: 10 } }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                height: "100%",
                width: { xs: "100%", md: "90%" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h1"
                sx={{ mt: { xs: 5, md: -5 }, fontSize: { xs: 30, md: 48 } }}
              >
                Featured
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={9} lg={12}>
            <Slider {...sliderConfig}>
              {data.map((item) => (
                <FeaturedCard key={String(item.id)} card={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePopularCourse;
