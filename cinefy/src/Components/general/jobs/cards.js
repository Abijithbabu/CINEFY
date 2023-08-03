import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ShareIcon from "@mui/icons-material/Share";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getPosts } from "../../../redux/action";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Artisto Club
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate();
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
        
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {data.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    onClick={()=>navigate(`/DetailPage?id=${card._id}`)}
                    key={`media-${card._id}`}
                    component="div"
                    sx={{
                      pt: "56.25%",
                      cursor:'pointer'
                    }}
                    image={card.image && `http://localhost:5000/${card.image}`}
                  />
                  <CardContent 
                    onClick={()=>navigate(`/DetailPage?id=${card._id}`)}
                    sx={{ 
                      flexGrow: 1,
                      cursor:'pointer'
                    }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.shortdescription}</Typography>
                  </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <div>
                        <IconButton aria-label="add to favorites">
                          <BookmarksIcon />
                        </IconButton>
                        <IconButton aria-label="share">  
                          <ShareIcon />
                        </IconButton>
                      </div>
                      <IconButton aria-label="arrow forward" onClick={()=>navigate(`/DetailPage?id=${card._id}`)}>
                        <IconArrowForward sx={{ fontSize: 22 }} />
                      </IconButton>
                    </CardActions>
                </Card>
              </Grid>  
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  );
}
