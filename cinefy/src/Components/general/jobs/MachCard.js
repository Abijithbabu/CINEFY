import styled from "@emotion/styled";
import { Box, Card, CardContent, Grid, Table, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";

const cardsData = [
  { id: 1, title: "autor ", age:"15-19",drirecto:"raj", writer:"manu", content: "Content of Card 1" },
  { id: 2, title: "sed boy", age:"15-19",drirecto:"raj", writer:"manu", content: "need a vattavaliya of hight 34 inch" },
  { id: 3, title: "comadeyan",  age:"15-19",drirecto:"raj", writer:"manu", content: "Content of Card 3" },
  // Add more card data as needed
];

const MachingCard = styled(Box)({
  background: "linear-gradient(237deg, #1A3845 0%, #1B3137 95.60%)",
  minHeight: "300px",
  marginTop: "34px",
  paddingTop: "0.5px",
  paddingBottom: "9px",
  borderRadius: "14px",
  boxShadow: "-8px 15px 15px #001609",
  minWidth: "0px",
  maxWidth: "350px",
});

const H1 = styled(Typography)({
  variant: "body1",
  color: "#FFE3B7",
  paddingLeft: "14px",
  paddingTop: "1px",
});

const H2 = styled(Typography)({
  variant: "body1",
  color: "#FFFA",
  paddingLeft: "14px",
  paddingRight: "14px",
  paddingTop: "1px",
});

const H3 = styled(Typography)({
  variant: "body1",
  color: "#9A8A76",
  paddingLeft: "14px",
  paddingRight: "14px",
  paddingTop: "1px", 
});

const ImageSlot = styled(Box)({
  height: "120px",
  margin: "13px",
  marginTop: "18px",
  background:
    "url(https://i.pinimg.com/736x/01/fb/9d/01fb9dbad54ba78aa4e669cf7bb54396.jpg), linear-gradient(237deg, #2F4549 0%, #151C25 95.60%)",
  borderRadius: "8px",
  backgroundSize: "100%, 20px",
  backgroundRepeat: "no-repeat, no-repeat",
});

function MachCard() {
  return (
    <>
      <Grid container spacing={2}>
        {cardsData.map((card) => (
          <Grid key={card.id} item lg={4} md={4} sm={6} xs={6}>
            <MachingCard>
              <ImageSlot></ImageSlot>             
              <H1>{card.title}</H1>           
              <H2 variant="body2"> age  : {card.age} </H2>
              <H2 variant="body2"></H2>             
              <H2 variant="body2">  {card.content}</H2>
              <H2 variant="body2">  </H2>              
              <table>
                <tr>
                  <td><H3 variant="body2"> drirector </H3></td>
                  <td><H3 variant="body2"> : {card.drirecto} </H3></td>
                </tr>
                <tr>
                  <td><H3 variant="body2"> writer</H3></td>
                  <td><H3 variant="body2"> : {card.writer} </H3></td>
                </tr>
              </table>     
            </MachingCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MachCard;












