import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { createPost } from "../../redux/action";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        ArtistoClub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Overview Title and Thumbnail",
  "Post details & specifications",
  "Publish your Ad",
];

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Checkout() {
  const InitState = {
    roles: ["Actress", "Actor", "Junior Artist"],
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState(InitState);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    console.log(step);
    if (step === 3) {
      console.log(data);
      createPost(data);
    }
    switch (step) {
      case 0:
        return <Step1 data={data} dispatch={setData} />;
      case 1:
        return <Step2 data={data} dispatch={setData} />;
      case 2:
        return <Step3 data={data} />;
      case 3:
        return (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Almost done !
            </Typography>
            <Typography variant="subtitle1">
              Your Post has been sent for verification , It will be live shortly
              once it got approved. you will be notified when finished
            </Typography>
          </React.Fragment>
        );
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 1 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 2 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 4 }}>
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Publish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
