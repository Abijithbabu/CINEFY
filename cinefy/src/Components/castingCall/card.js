import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

export const JobCards = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    // <Grid item key={data._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    onClick={()=>navigate(`/DetailPage?id=${data._id}`)}
                    key={`media-${data._id}`}
                    component="div"
                    sx={{
                      pt: "56.25%",
                      cursor:'pointer'
                    }}
                    image={data.image && `http://localhost:5000/${data.image}`}
                  />
                  <CardContent 
                    onClick={()=>navigate(`/DetailPage?id=${data._id}`)}
                    sx={{ 
                      flexGrow: 1,
                      cursor:'pointer'
                    }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {data.title}
                    </Typography>
                    <Typography>{data.shortdescription}</Typography>
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
                      <IconButton aria-label="arrow forward" onClick={()=>navigate(`/DetailPage?id=${data._id}`)}>
                        <IconArrowForward sx={{ fontSize: 22 }} />
                      </IconButton>
                    </CardActions>
                </Card>
              // </Grid>  
   
  );
};


  {/* <Card
  sx={{
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}
  >
  <CardContent>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Avatar
        src={`http://localhost:5000/${data.image}`} 
        variant="square"
      />
    </Box>
    <Typography
      align="center"
      gutterBottom
      variant="h5"
    >
      {data.title}
    </Typography>
    <Typography
      align="center"
      variant="body1"
    >
      {data.description}
    </Typography>
  </CardContent>
  <Box sx={{ flexGrow: 1 }} />
  <Divider />
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="space-between"
    spacing={2}
    sx={{ p: 2 }}
  >
    <Stack
      alignItems="center"
      direction="row"
      spacing={1}
    >
      <SvgIcon
        color="action"
        fontSize="small"
      >
        <ClockIcon />
      </SvgIcon>
      <Typography
        color="text.secondary"
        display="inline"
        variant="body2"
      >
        Updated 2hr ago
      </Typography>
    </Stack>
    <Stack
      alignItems="center"
      direction="row"
      spacing={1}
    >
      <SvgIcon
        color="action"
        fontSize="small"
      >
        <ArrowDownOnSquareIcon />
      </SvgIcon>
      <Typography
        color="text.secondary"
        display="inline"
        variant="body2"
      >
        {data.downloads} views
      </Typography>
    </Stack>
  </Stack>
  </Card> */}