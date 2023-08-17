import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Stepper from "./contents";
import { warning } from "framer-motion";
import { Alert } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({ data }) {
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleConfirmClose = () => {
    setConfirm(false);
    setOpen(false);
  };
  const handleClose = () => {
    activeStep===3 ? setOpen(false) : setConfirm(true);
  };

  return (
    <div>
      <Button variant="outlined"  onClick={handleClickOpen}>
        {data ? "Edit" : "Create"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {data ? "Edit Post" : "Create Post"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Stepper
              state={data}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Discard Changes"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By proceeding changes will be discarded and cannot be retreived
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirm(false)}>Cancel</Button>
          <Button onClick={handleConfirmClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
