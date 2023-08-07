import React, { useState } from "react";
import Slider from "react-slick";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

const H1 = styled(Typography)({
  fontFamily: "",
  color: "#000",
  
});

const H2 = styled(Typography)({
  variant: "h6",
  color: "#000",
  paddingLeft: "15px",
  paddingTop: "5px",
});

const Ul = styled(ListItem)({
  
  height: "25px",
  paddingTop: "0px",
  paddingBottom: "0px",
});

const Lbtn = styled(ListItemButton)({
  paddingBottom: "1px",
  paddingTop: "1px",
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimpleSlider = ({ Fili }) => {
  const [open, setOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleClickOpen = (title) => {
    setSelectedTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    slickNext: false,
    slickPrevious: false,
    swipe: true,
    prevArrow: <div></div>,
    nextArrow: <div></div>,
  };

  return (
    <Slider {...settings} sx={{paddingBottom:'0px'}}>
      {Fili.map((card) => (
        <div key={card.id}>
          <Button
          
          size="small"
            variant="outlined"
            onClick={() => handleClickOpen(card.title)}
            style={{
              borderRadius: "15px",
              height: "28px",
              display: "block",
              overflow: "hidden",
              borderColor:"#808080",
              width:'90%'
            }}
          >
            <H1 variant="body2">{card.title} </H1>
            <CloseIcon fontSize="small" />
          </Button>
          <Dialog
            open={open && selectedTitle === card.title}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{card.title}</DialogTitle>
            <DialogContent>
              <DialogContentText paddingRight={10} id="alert-dialog-slide-description">
                <List sx={{ width: "100%", }}  size="small">
                  {card.elements.map((element, index) => (
                    <Ul key={index}>
                      <Lbtn size="small">
                        <ListItemIcon>
                          <Checkbox size="small" />
                          <H2 variant="body2">{element}</H2>
                        </ListItemIcon>
                      </Lbtn>
                    </Ul>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
