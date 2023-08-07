import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { iconButtonClasses } from "@mui/material/IconButton";
import { styled } from "styled-components";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router";
import { timeAgo } from "../../../utils/functions";
const CourseCardItem = ({ card }) => {
  const MachingCard = styled(Card)({
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
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }} 
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "background.paper",
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(["box-shadow"]),
          "&:hover": {
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              boxShadow: 2,
            },
          },
        }}
      >
        <MachingCard
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
            image={card.image && `http://localhost:5000/${card.image}`}
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
            <H3 variant="body2" component="poppins" marginBottom={1}>
              {card.date}
            </H3>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              {/* <IconButton aria-label="add to favorites" onClick={()=>setChecked(!checked)}>
                        { checked ?
                          <BookmarkIcon fontSize="small" /> :
                          <BookmarkBorderIcon fontSize="small" /> 
                        }  
                        </IconButton> */}
            </div>
          </CardActions>
        </MachingCard>
      </Box>
    </Box>
  );
};

export default CourseCardItem;
