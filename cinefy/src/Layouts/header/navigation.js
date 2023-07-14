import React from 'react'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navigations = [
        {
          label: 'Home',
          path: '/', // '/',
        },
        {
          label: 'Find Jobs',
          path: '/findJobs', // '/popular-course',
        },
        {
          label: 'About',
          path: '/about', // '/testimonial',
        },
        {
          label: 'Contact',
          path: '/contact', // '/mentors',
        },
      ]
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={Link}
          key={destination}
        //   activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            textDecorationLine:'none',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === window.location.pathname && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            {/* eslint-disable-next-line */}
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
