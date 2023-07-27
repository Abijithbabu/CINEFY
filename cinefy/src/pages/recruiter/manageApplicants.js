import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/recruiterLayout'
import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from '@mui/material'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import Table from '../../Components/recruiter/manageApplicants/table'
import { getUsers } from '../../redux/action'

const ManageContent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUsers("user").then((res) => setData(res.user));
      }, []);
    return (
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
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
               Manage Applicants
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
