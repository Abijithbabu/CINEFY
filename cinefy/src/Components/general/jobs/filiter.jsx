import styled from "@emotion/styled";
import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// Styled Compontents

const FiliterCard = styled(Box)({
  background: "linear-gradient(226deg, #253541 1.21%, #0F2D2B 100%)",
  height: "",
  marginTop: "10px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "14px",
  boxShadow: "-30px 50px 50px #001609",
  minWidth: "100px",
  maxWidth: "300px",
});

const H1 = styled(Typography)({
  variant: "body1",
  color: "#FFE3B7",
  paddingLeft: "25px",
  paddingTop: "10px",
});

const H2 = styled(Typography )({
  variant:"h6",
  color: "#9A8A76",
  paddingLeft: "15px",
  paddingTop: "5px",
});

const Ul = styled(ListItem)({
  padding: "0px",
  height: "15px",
  paddingTop: "20px",
  paddingBottom: "10px",
});

const Lbtn = styled(ListItemButton)({
  paddingBottom: "1px",
  paddingTop: "1px",
});


function Filiter() {
  return (
    <FiliterCard>     
      <H1>Location</H1>
      <List sx={{ width: "100%" }} size="small">
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2 variant="h8">Near me</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>Remote</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 15 km</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 30 km</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 50 km</H2></ListItemIcon></Lbtn></Ul>
      </List>
      <Divider />
      <H1>Salary</H1>
      <ButtonGroup sx={{pt:"10px", pl:"25px"}} size="small" variant="outlined" color="secondary" aria-label="small button group">
        <Button>Hourly</Button>
        <Button>Monthly</Button>
        <Button>Yearly</Button>
      </ButtonGroup>
      <List sx={{ width: "100%" }} size="small">
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than 30k</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than 45k</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than 60k</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than 90k</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>Above 100k</H2></ListItemIcon></Lbtn></Ul>
      </List>
      <Divider />
      <H1>Date of posting</H1>
      <List sx={{ width: "100%" }} size="small">
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2 >All time</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>Last 24 hours</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>Last 3 days</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>last 24 days</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>more than one month</H2></ListItemIcon></Lbtn></Ul>
      </List>
      <Divider />
      <H1>Work Experience</H1>
      <List sx={{ width: "100%" }} size="small">
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2 >Near me</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>Remote</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 15 km</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 30 km</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 50 km</H2></ListItemIcon></Lbtn></Ul>
      </List>
      <Divider />
      <H1>Type of employment</H1>
      <List sx={{ width: "100%" }} size="small">
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2 >full-time</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than 60 shots</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than a week</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>less than a month</H2></ListItemIcon></Lbtn></Ul>
        <Ul><Lbtn><ListItemIcon><Checkbox size="small" /><H2>with in 50 km</H2></ListItemIcon></Lbtn></Ul>
      </List>
      <Divider />
    </FiliterCard>
  );
}
export default Filiter;






//#C5AE8D 100%
//<ListItemText />
