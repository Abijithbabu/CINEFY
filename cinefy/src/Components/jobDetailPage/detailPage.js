import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { red } from "@mui/material/colors";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { applyJob, getPostDetails } from "../../redux/action";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const location = useLocation(); 
  const queryParams = queryString.parse(location.search);
  const [details, setDetails] = useState();
  const data = useSelector((store) => store.data.user);
  useEffect(() => {
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

  async function handleClick() {
    await applyJob(details._id,data._id)
    await getPostDetails(queryParams.id).then(
      (res) => res && setDetails(res)
    );  }

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
        <Grid item xs={12} md={4} marginTop={2}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItems="right"
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
                  <Typography>Follow</Typography>
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: { sx: 1, sm: 1, md: 0, lg: 0, xl: 0 },
              mt: { md: 2, lg: 2, xl: 2 },
              marginLeft: { md: 2, lg: 2, xl: 2 },
            }}
          >
            <Card>
              <CardHeader
                action={
                  <IconButton aria-label="settings" gap="3">
                    <BookmarksIcon />
                  </IconButton>
                }
                title="Casting Details"
                subheader=""
              />
              <CardContent>
                <Table>
                  <TableBody>
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
                      <TableCell align="left">: {details?.gender}</TableCell>
                    </TableRow>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell> Age</TableCell>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">: {details?.age}</TableCell>
                    </TableRow>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell> No.of People Required</TableCell>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">: {details?.roles}</TableCell>
                    </TableRow>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell> Movie</TableCell>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">: {details?.movie}</TableCell>
                    </TableRow>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>Preference</TableCell>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">: {details?.roles}</TableCell>
                    </TableRow>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>Last Date for submission</TableCell>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">
                        :{" "}
                        {new Date(details?.date).toLocaleDateString(undefined, {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

             {details?.applicants.includes(data._id)?(
                          <Button
                          sx={{ mt: 3, mb: 3 }}
                          variant="blur"
                        > 
                        Application Submitted
                        </Button>
             ):(
              <Button
              sx={{ mt: 3, mb: 3 }}
              variant="outlined"
              onClick={handleClick}
            > 
            APPLY NOW
            </Button>
 )} 
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPage;
