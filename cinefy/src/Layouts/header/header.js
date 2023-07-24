import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";
import { Typography, Button, Avatar, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router";
import { usePopover } from "../../hooks/use-popover";
import { AccountPopover } from "../dashboard/account-popover";
import { useSelector } from "react-redux";
import Navigation from "./navigation";
import CreateJob from '../../Components/createJob/createJob'
const Header = () => {
  const accountPopover = usePopover();
  const navigate = useNavigate();
  const [method, setMethod] = useState(window.location.pathname);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const variant = "primary";
  const data = useSelector((store) => store.data.user);

  return (
    <Box sx={{
      backdropFilter: "blur(5px)",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      padding:0,
      zIndex: 1000,
    }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box position={'relative'}
          sx={{

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              component="img"
              src="navBarLogo.png"
              alt="Image description"
              width={260}
              height={60}
            />

            {/* <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                "& span": {
                  color: variant === "primary" ? "primary.main" : "unset",
                },
              }}
            >
              Artisto<span>Club</span>
            </Typography> */}
          </Box>
          <Box sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}>
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
                height: { xs: "100vh", md: "auto" },
                top: visibleMenu ? 0 : "-120vh",
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation data={data} />
            {/* <AuthNavigation /> */}
            {data ? (
              <>
                {data.type == "admin" ? (
                  <Button
                    onClick={() => navigate("/admin/account")}
                    variant="contained"
                    size="small"
                  >
                    GO TO ADMIN CONSOLE
                  </Button>
                ) : (
                  data?.type === "recruiter" && <CreateJob />
                )}
                <Avatar
                  onClick={accountPopover.handleOpen}
                  ref={accountPopover.anchorRef}
                  sx={{
                    cursor: "pointer",
                    height: 40,
                    width: 40,
                  }}
                  src={
                    data?.imageUrl ?? "/assets/avatars/avatar-anika-visser.png"
                  }
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
  );
};

export default Header;