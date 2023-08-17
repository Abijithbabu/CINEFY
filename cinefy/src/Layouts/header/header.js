import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createMuiTheme, useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";
import {
  Typography,
  Button,
  Avatar,
  Tab,
  Tabs,
  ButtonGroup,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router";
import { usePopover } from "../../hooks/use-popover";
import { AccountPopover } from "../dashboard/account-popover";
import { useSelector } from "react-redux";
import Navigation from "./navigation";
import ChatIcon from "@mui/icons-material/Chat";
import CreateJob from "../../Components/creator/createJob/createJob";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import { keyframes, styled } from "styled-components";

const H2 = styled(Typography)`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding-top: px;
  font-size: 30px;
  padding-left: 0px;
  color: "#F1F1F1";
`;
const glossyAnimation = keyframes`
  from {
    transform: scale(1);
    filter: brightness(1);
  }
  to {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
`;

const GlossyIconButton = styled(IconButton)`
  position: relative;
  animation: ${glossyAnimation} 1s infinite alternate;
`;
const Header = () => {
  const accountPopover = usePopover();
  const navigate = useNavigate();
  const [method, setMethod] = useState(window.location.pathname);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const variant = "primary";
  const data = useSelector((store) => store?.data?.user);
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Poppins", ""].join(","),
    },
});
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          // backdropFilter: "blur(5px)",
          background: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: 0,
          zIndex: 1000,
          height: 60,
        }}
      >
        <Container sx={{ py: { xs: 1, md: 1 } }}>
          <Box
            position={"relative"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* <Box
              component="img"
              src="navBarLogo.png"
              alt="Image description"
              width={260}
              height={60}
            /> */}
              <H2 variant="H">CINEFY</H2>
              {/* <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 500,
                fontFamily: '',
                "& span": {
                  color: '#1E1E1E',
                },
              }}
            >
              <span>CINEFY</span>
            </Typography> */}
            </Box>
            <Box
              sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}
            >
              <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                <Menu />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },

                transition: (theme) => theme.transitions.create(["top"]),
                ...(matchMobileView && {
                  py: 6,
                  backgroundColor: "background.paper",
                  zIndex: "appBar",
                  position: "fixed",
                  height: { xs: "100vh", md: "50vh" },
                  top: visibleMenu ? 0 : "-120vh",
                  left: 0,
                }),
              }}
            >
              <Box /> {/* Magic space */}
              <H2>
                <Navigation data={data} />
              </H2>
              {/* <AuthNavigation /> */}
              {data ? (
                <>
                  {data.type == "admin" ? (
                    <Button
                      onClick={() => navigate("/admin")}
                      variant="contained"
                      size="small"
                    >
                      GO TO ADMIN CONSOLE
                    </Button>
                  ) : (
                    <>
                      {" "}
                      <ButtonGroup variant="text" size="large">
                        <IconButton onClick={() => navigate("/chat")}>
                          <ChatIcon />
                          <Typography sx={{ fontSize: "10px" }}>
                            Messages
                          </Typography>
                        </IconButton>
                        <Button></Button>
                        {new Date() >= new Date(data?.subscription?.validity) && (
                          <GlossyIconButton
                            onClick={() => navigate("/premium")}
                          >
                            <CardMembershipIcon color="warning" />
                            <Typography sx={{ fontSize: "10px" }}>
                              Try premium
                            </Typography>
                          </GlossyIconButton>
                        )}
                      </ButtonGroup>
                    </>
                  )}
                  <Avatar
                    onClick={accountPopover.handleOpen}
                    ref={accountPopover.anchorRef}
                    sx={{
                      cursor: "pointer",
                      height: 40,
                      width: 40,
                      borderWidth: "15px",
                      borderColor: "#000",
                    }}
                    src={data?.profilePic}
                  />
                  <AccountPopover
                    anchorEl={accountPopover.anchorRef.current}
                    open={accountPopover.open}
                    onClose={accountPopover.handleClose}
                  />
                </>
              ) : (
                <div>
                  <Button variant="outlined" onClick={() => navigate("/login")}>
                    Sign In
                  </Button>
                  <Button onClick={() => navigate("/register")}>Sign Up</Button>
                </div>
              )}
              {visibleMenu && matchMobileView && (
                <IconButton
                  sx={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                  }}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                >
                  <Close />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
