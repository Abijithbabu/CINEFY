import styled from "@emotion/styled";
import React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import SimpleSlider from "./mobFilter";

const Fili = [
  {
    id: 1,
    title: "Location ",
    elements: [
      "Near me",
      "Remote",
      "within 15 km",
      "with in 30 km",
      "with in 50 km",
    ],
  },
  {
    id: 2,
    title: "Salary",
    flag: "1",
    elements: ["less than 30k", "less than 45k", "less than 50k", "above 60k"],
  },
  {
    id: 3,
    title: "Date of posting",
    elements: ["Last 24 hours", "Last 3 days", "last 24 days", "expering soon"],
  },
  {
    id: 4,
    title: "Date of posting",
    elements: ["Last 24 hours", "Last 3 days", "last 24 days", "expering soon"],
  },
  {
    id: 5,
    title: "Date of posting",
    elements: ["Last 24 hours", "Last 3 days", "last 24 days", "expering soon"],
  },
];

const FiliterCard = styled(Card)({
  display: "flex-row",
  align: "",
  
  height: "",
  marginTop: "10px",
  minWidth: "100px",
  maxWidth: "px",
});

const H1 = styled(Typography)({
  fontFamily: "",
  color: "#000",
  paddingLeft: "25px",
  paddingTop: "10px",
});

const H2 = styled(Typography)({
  variant: "h6",
  color: "#000",
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
    <>
      <Hidden mdDown implementation="css">
      <Typography>Filiter</Typography>
        <FiliterCard>
          {Fili.map((card) => (
            <Box key={card.id} mt="2">
              <H1>{card.title}</H1>
              {card.flag === "1" && (
                <ButtonGroup
                  sx={{ pt: "10px", pl: "25px" }}
                  size="small"
                  variant="outlined"
                  color="secondary"
                  aria-label="small button group"
                >
                  <Button>Hourly</Button>
                  <Button>Monthly</Button>
                  <Button>Yearly</Button>
                </ButtonGroup>
              )}
              <List sx={{ width: "100%" }} size="small">
                {card.elements.map((element, index) => (
                  <Ul key={index}>
                    <Lbtn size="small" >
                      <ListItemIcon>
                        <Checkbox size="small" />
                        <H2 variant="body2">{element}</H2>
                      </ListItemIcon>
                    </Lbtn>
                  </Ul>
                ))}
              </List>
              <Divider />
            </Box>
          ))}
        </FiliterCard>
      </Hidden>
      <Hidden mdUp implementation="css">
        <SimpleSlider Fili={Fili}/>
      </Hidden>
    </>
  );
}
export default Filiter;



//#C5AE8D 100%
//<ListItemText />
//linear-gradient(226deg, #253541 1.21%, #0F2D2B 100%)
//linear-gradient(44deg, #171D1F 0%, #111B18 38.03%, rgba(16, 23, 26, 0.97) 64.31%, rgba(20, 28, 26, 0.92) 90.55%)
