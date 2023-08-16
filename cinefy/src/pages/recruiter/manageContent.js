import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/recruiterLayout'
import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from '@mui/material'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import Table from '../../Components/creator/manageContent/table'
import { getPosts } from '../../redux/action'
import { useLocation } from 'react-router'
import queryString from 'query-string'

const ManageContent = ({select}) => {
  const location = useLocation()
  const queryParams = queryString.parse(location.search)
  const id = queryParams.id
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
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Manage contents
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
            {data.length ? <Table data={data} select={id}/> : <div>Loading...</div>}
        </Stack>
      </Container>
    </Box>
      </Layout>
    </>
  )
}

export default ManageContent 
