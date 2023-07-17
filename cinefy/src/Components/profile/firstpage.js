import React from "react";
import { Autocomplete, Avatar, Box, Card, CardContent, CardHeader, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { red } from "@mui/material/colors";


const skills = [
  { title: "long jump" },
  { title: "metad acting" },
  { title: "JavaScript" },
  // Add more skills as needed 
];

const Profile = () => {
  return (
    <Container sx={{mt:14}} >
      <Box maxWidth={9999} height={100} sx={{ background: "url('artisto.jpg'), lightgray 50% / cover no-repeat" }}>

        <Typography>jwewjj</Typography>
      </Box>
      <Grid container spacing={0}>
        {/* First Box */}
        <Grid item xs={12} md={4} marginTop={5}>
          <Box sx={{ display: "flex", flexDirection: "column" }} alignItem='right'
            display='flex'
            justifyContent="right">
            {/* Profile Image */}
            <Card sx={{ marginTop: '10px' }} >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" >
                    <CreateIcon sx={{ paddingLeft: '10px' }} />
                  </IconButton>
                }

                title="Video Introduction"
                subheader="create a 5 min attractive indroduction for get impertion"
              />
              <CardContent>
                <Typography marginTop={1} variant="subtitle1">Profile Completed: 80%</Typography>
              </CardContent>
            </Card>

            {/* Video Introduction */}

            <Card sx={{ marginTop: '10px' }} >
              <CardHeader
                action={
                  <IconButton aria-label="settings" >
                    <AttachFileIcon />
                    <CreateIcon sx={{ paddingLeft: '10px' }} />
                  </IconButton>
                }
                title="Video Introduction"
                subheader="create a 5 min attractive indroduction for get impertion"
              />
              <CardContent>
                <video margin={3} src="/path/to/video-introduction.mp4" controls />
              </CardContent>
            </Card>


            {/* Languages */}

            <Card sx={{ maxWidth: 999, marginTop: '10px' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Languages
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  English
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  French
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  Spanish
                </Typography>

              </CardContent>
            </Card>

            {/* Certifications */}

            <Card sx={{ maxWidth: 999, marginTop: '10px' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Certifications
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  Certification 1 - form unnikuttan awards
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  Certification 2
                </Typography>
              </CardContent>
            </Card>

            {/* Education */}
            <Card sx={{ maxWidth: 999, marginTop: '10px' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Education
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  College Name - Degree
                </Typography>
                <Divider />
                <Typography sx={{ margin: '10px' }} variant="body1" color="text.secondary">
                  University Name - Degree
                </Typography>
              </CardContent>
            </Card>

          </Box>
        </Grid>

        {/* Second Box */}
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column", margin: { sx: 1, sm: 1, md: 10, lg: 0, xl: 0 }, marginTop: { lg: 2, xl: 2 }, marginLeft: { lg: 2, xl: 2 } }}>
            {/* About Description */}
            <Card marginTop={5} >
              <CardHeader
                action={
                  <IconButton aria-label="settings" gap="3">
                    <ControlPointIcon />
                    <CreateIcon sx={{ paddingLeft: '10px' }} />
                  </IconButton>
                }
                title="ANJITH"
                subheader="description"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
                </Typography>
              </CardContent>
            </Card>
            {/* Work History */}

            <Card sx={{ marginTop: '10px' }} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <ControlPointIcon />
                    <CreateIcon sx={{ paddingLeft: '10px' }} />
                  </IconButton>
                }
                title="Work History"
                subheader="Adding work expericnce will incerase your chance"

              />
              <CardContent>

                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Film A - Roll A - Duration" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Spam" />
                    </ListItemButton>
                  </ListItem>
                </List>

              </CardContent>
            </Card>
            {/* Skills */}

            <Card sx={{ marginTop: '10px' }}>
              <Autocomplete
                multiple
                id="multiple-limit-tags"
                options={skills}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField {...params} label="Skills" placeholder="Add skills" />
                )} />
            </Card>

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;