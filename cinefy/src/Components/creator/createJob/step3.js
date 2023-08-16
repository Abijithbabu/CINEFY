import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

export default function AddressForm({ data,edit }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review & Publish
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {data.image && (
              <CardMedia
                component="div"
                sx={{
                  16: 9,
                  pt: "56.25%",
                }}
                image={typeof(data.image) == 'object'? URL.createObjectURL(data.image) : `http://localhost:5000/${data.image}`} 
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {data?.title}
              </Typography>
              <Typography>
                {data?.shortdescription}
              </Typography>
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
              <IconButton aria-label="arrow forward">
                <IconArrowForward sx={{ fontSize: 22 }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox checked color="primary" name="terms" value="yes" />
            }
            label="I have read and accepted all the Terms and Conditions "
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
