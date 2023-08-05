import React, { useState } from "react";
import Slider from "react-slick";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";


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
    <Slider {...settings}>
    {Fili.map((card) => (
      <div key={card.id}>
        <Button variant="outlined" onClick={() => handleClickOpen(card.title)} style={{
                borderRadius: "15px",
                height: "32px",
                display: "block",
                overflow: "hidden",
                width: "90%"
              }}>
          {card.title}
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
            <DialogContentText id="alert-dialog-slide-description">
              {card.elements.join(", ")}
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
