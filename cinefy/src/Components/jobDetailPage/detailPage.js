import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { red } from "@mui/material/colors";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AddIcon from "@mui/icons-material/Add";
import { Add } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getPostDetails } from "../../redux/action";

const skills = [
  { title: "long jump" },
  { title: "metad acting" },
  { title: "JavaScript" },
  // Add more skills as needed
];

const DetailPage = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [details, setDetails] = useState();
  React.useEffect(() => {
    try {
      const fetchData = async () => {
        await getPostDetails(queryParams.id).then(
          (res) => res && setDetails(res)
        );
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  function handleClick() {
  }
  // function data() {
  //   let data = ''
  //   for (const key in details) {
  //     if (details.hasOwnProperty(key) && key !== "image") {
  //      data += (<TableRow sx={{ "& > *": { borderBottom: "none" } }}>
  //         <TableCell>{key}</TableCell>
  //         <TableCell component="th" scope="row">
  //           {" "}
  //         </TableCell>
  //         <TableCell align="left">: { details[key]}</TableCell>
  //       </TableRow>)
  //     }
  //   }
  //   console.log(data);
  // }
  return (
    <Container sx={{ mt: 14 }}>
      <Box
        maxWidth={9999}
        height={150}
        sx={{
          background: `url(http://localhost:5000/${details?.image} ), lightgray 50% / cover no-repeat`,
          borderRadius: "4px",
        }}
      >
        <Typography></Typography>
      </Box>
      <Grid container spacing={0}>
        {/* First Box */}

        <Grid item xs={12} md={4} marginTop={2}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItem="right"
            display="flex"
            justifyContent="right"
          >
            <Card sx={{}}>
              <CardMedia
                sx={{ height: 140 }}
                image={`http://localhost:5000/${details?.image}`}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {details?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {details?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
            {/* Profile Image */}

            {/* Video Introduction */}

            {/* Languages */}

            {/* Certifications */}

            <Card sx={{ mt: 1, mb: 1 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <OpenInNewIcon />
                  </IconButton>
                }
                title="Chorizo Paella"
                subheader="Producer"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. .
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Button size="small">Follow</Button>
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: { sx: 1, sm: 1, md: 0, lg: 0, xl: 0 },
              marginTop: { md: 2, lg: 2, xl: 2 },
              marginLeft: { md: 2, lg: 2, xl: 2 },
            }}
          >
            {/* About Description */}
            <Card marginTop={5}>
              <CardHeader
                action={
                  <IconButton aria-label="settings" gap="3">
                    <ControlPointIcon />
                    <CreateIcon sx={{ paddingLeft: "10px" }} />
                  </IconButton>
                }
                title="Casting Details"
                subheader=""
              />
              <CardContent>
                <React.Fragment> 
                  <TableRow sx={{ "& > *": { borderBottom: "none" } }}>
                    <TableCell>Role</TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                    </TableCell>
                    <TableCell align="left">: {details?.roles}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "none" } }}>
                    <TableCell>Gender</TableCell>
                    <TableCell component="th" scope="row">
                      {" "}
                    </TableCell>
                    <TableCell align="left">:  {details?.gender}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell> Age</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">:  {details?.age}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell> No.of People Required</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">:  {details?.roles}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell> Movie</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">
                      : {details?.movie}
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>Preference</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">:  {details?.roles}</TableCell>
                  </TableRow>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>Last Date for submission</TableCell>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">: {new Date(details?.date).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })}</TableCell>
                  </TableRow>
                </React.Fragment>
              </CardContent>
            </Card>
            <Button sx={{mt:3,mb:3}} variant="outlined" onClick={handleClick}>APPLY NOW</Button>
          </Box>
        </Grid>
      </Grid>
    </Container> 
  );
};

export default DetailPage;
