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
import { createPost, editPost } from "../../../redux/action";
import { useSelector } from "react-redux";

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

export default function Checkout({state,activeStep,setActiveStep}) {
  const user = useSelector((store) => store?.data?.user)
  const InitState = state ?? {
    roles: ["Actress", "Actor"],
    language:[],
    age:[15,25],
    title:'',
    shortdescription:''
  };

  const [data, setData] = React.useState(InitState);
  const handleNext = () => {
    setActiveStep(activeStep + 1); 
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key) && key !== "image") {
        formData.append(key, data[key]);
      }
    }
    !state && formData.append("author", user._id)
    typeof(data.image) == 'object' && formData.append("image", data.image, data?.image?.name);
    console.log(formData);
    state ? editPost(formData) : createPost(formData) 
    handleNext()
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 edit={state?true:false} data={data} dispatch={setData} />;
      case 1:
        return <Step2 edit={state?true:false} data={data} dispatch={setData} />;
      case 2:
        return <Step3 edit={state?true:false} data={data} />;
      case 3:
        return (
          <React.Fragment>
            <Typography variant="title" gutterBottom>
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
              {activeStep !== 3 && (
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Publish
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              )}
            </React.Fragment>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
