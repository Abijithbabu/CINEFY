import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/recruiterLayout'
import { Box, Button, Container, Grid, Paper, Stack, SvgIcon, Typography } from '@mui/material'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import Table from '../../Components/creator/manageContent/table'
import { getPosts } from '../../redux/action'

const ManageContent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getPosts().then((res) => setData(res))
    }, []);  return (
    <>
      <Layout>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        // py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Dashboard
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <Box
      sx={{
        display: 'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:'100%',
          maxWidth: 228,
          height: 128,
        },
      }}
    >
      <Paper>
        ratings
      </Paper>
      <Paper />
      <Paper />
      <Paper />
    </Box>
          </Stack>
            {data.length ? <Table data={data} /> : <div>Loading...</div>}
        </Stack>
      </Container>
    </Box>
      </Layout>
    </>
  )
}

export default ManageContent 
