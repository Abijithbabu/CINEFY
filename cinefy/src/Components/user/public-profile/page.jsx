import { Box, Button, Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
    <Container sx={{ mt: 14 ,mb:100 }}>

           <Box
        maxWidth={9999}
        height={150}
        sx={{
          background: "url('a.jpg'), lightgray 50% / cover no-repeat",
          borderRadius: "4px",
        }}
        >
 
      </Box>
          </Container>
    </>
  )
}

export default page