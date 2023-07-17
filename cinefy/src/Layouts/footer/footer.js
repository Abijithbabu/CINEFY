import React from 'react'
import FooterNavigation from './footerNavigation'
import { Box, Container, Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'black', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h4" variant="h4" sx={{ mb: 2 }}>
                ArtistoClub
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                We deliver a single integrated application that acts as a platform that brings everyone involved in the cine field under a single roof. 
              </Typography>
              {/* <FooterSocialLinks /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid> 
      </Container> 
    </Box>
  )
}

export default Footer
 