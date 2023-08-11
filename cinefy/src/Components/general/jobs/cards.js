import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getPosts } from "../../../redux/action";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { timeAgo } from "../../../utils/functions";
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

const MachingCard = styled(Box)({
  minHeight: "30px",
  marginTop: "32px",
  paddingTop: "0.5px",
  paddingBottom: "px",

  minWidth: "0px",
  maxWidth: "350px",
});

const H1 = styled(Typography)({
  variant: "body1",
  color: "#000",
  paddingLeft: "1px",
  paddingTop: "1px",

  fontSize: "14px",

  fontWeight: "600",
  lineHeight: "normal",
});

const H3 = styled(Typography)({
  variant: "body1",
  color: "#000",
  paddingLeft: "px",
  paddingRight: "px",
  paddingTop: "1px",
});

const ImageSlot = styled(CardMedia)({
  minHeight: "1px",
  margin: "3px",
  marginTop: "6px",
  borderRadius: "2px",
  backgroundRepeat: "no-repeat, no-repeat",
  boxShadow: "0px 0px 1px 0px #07191D inset",
});

const CardTime = styled(Typography)({
  color: "#484848",
  textAlign: "right",

  fontSize: "11px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  padding: "3px 6px 0px 0px",
});

const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <motion.div
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
            >
        <Container sx={{ py: { sm: 0, sx: 0, md: 0, lg: 8 } }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            
              {data.map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
                  <MachingCard>
                    <motion.div
                      className="item "
                      variants={item}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardTime>{timeAgo(card.date)}</CardTime>
                      <ImageSlot
                        onClick={() => navigate(`/DetailPage?id=${card._id}`)}
                        key={`media-${card._id}`}
                        component="div"
                        sx={{
                          pt: "56.25%",
                          cursor: "pointer",
                        }}
                        image={
                          card.image && `http://localhost:5000/${card.image}`
                        }
                      />
                      <CardContent
                        onClick={() => navigate(`/DetailPage?id=${card._id}`)}
                        sx={{
                          flexGrow: 1,
                          cursor: "pointer",
                        }}
                      >
                        <H1>{card.title}</H1>
                        <H3 variant="body2" component="poppins">
                          role : {card.roles}
                        </H3>
                        <H3 variant="body2" component="poppins">
                          gender : {card.gender}{" "}
                        </H3>
                        <H3
                          variant="body2"
                          component="poppins"
                          marginBottom={1}
                        >
                          {card.date}
                        </H3>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <IconButton
                            aria-label="add to favorites"
                            onClick={() => setChecked(!checked)}
                          >
                            {checked ? (
                              <BookmarkIcon fontSize="small" />
                            ) : (
                              <BookmarkBorderIcon fontSize="small" />
                            )}
                          </IconButton>
                        </div>
                      </CardActions>
                    </motion.div>
                  </MachingCard>
                </Grid>
              ))}
            
          </Grid>
        </Container>
        </motion.div>
      </main>
    </ThemeProvider>
  );
}
