import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import { Typography, Button, Avatar, Tab, Tabs } from '@mui/material'
import { useNavigate } from 'react-router'
import { usePopover } from '../hooks/use-popover';
import { AccountPopover } from './dashboard/account-popover'
import { useSelector } from 'react-redux'

const Header = () => {
    const accountPopover = usePopover()
    const navigate = useNavigate()
    const [method , setMethod] = useState(window.location.pathname)
    const [visibleMenu, setVisibleMenu] = useState(false)
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))
    const variant = 'primary'
    const data = useSelector((store) => store.data.user);
    const handleMethodChange = useCallback(
        (event, value) => {
          setMethod(value);
          navigate(value)
        },
        []  
      )
    return (
        <Box sx={{ backgroundColor: 'background.paper' }}>
            <Container sx={{ py: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
                        >
                            Artisto<span>Club</span>
                        </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
                        <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: { xs: 'column', md: 'row' },

                            transition: (theme) => theme.transitions.create(['top']),
                            ...(matchMobileView && {
                                py: 6,
                                backgroundColor: 'background.paper',
                                zIndex: 'appBar',
                                position: 'fixed',
                                height: { xs: '100vh', md: 'auto' },
                                top: visibleMenu ? 0 : '-120vh',
                                left: 0,
                            }),
                        }}
                    >
                        <Box /> {/* Magic space */}
                        <Box >
                        <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Home"
                value="/"
              />
              <Tab
                label="Find Jobs"
                value="/findJobs"
              />
              <Tab
                label="About"
                value="/about"
              />
              <Tab
                label="Contact us"
                value="/contact"
              />
            </Tabs>
                        </Box>
                        {data ? (<> 
                        {data.type=="admin"&&(
                        
                            <Button onClick={() => navigate('/account')} variant="contained">
                                GO TO ADMIN CONSOLE
                            </Button>
                        
                        )}
                        <Avatar
                            onClick={accountPopover.handleOpen}
                            ref={accountPopover.anchorRef}
                            sx={{
                                cursor: 'pointer',
                                height: 40,
                                width: 40
                            }}
                            src={data?.imageUrl ?? "/assets/avatars/avatar-anika-visser.png"}
                        />
                        <AccountPopover
                            anchorEl={accountPopover.anchorRef.current}
                            open={accountPopover.open}
                            onClose={accountPopover.handleClose}
                        />
                        </>) : (
                            <div>
                                <Button

                                    variant="outlined"
                                    onClick={() => navigate('/login')}
                                >
                                    Sign In
                                </Button>
                                <Button onClick={() => navigate('/register')}>
                                    Sign Up
                                </Button>
                            </div>

                        )}
                        {visibleMenu && matchMobileView && (
                            <IconButton
                                sx={{
                                    position: 'fixed',
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
    )
}

export default Header
