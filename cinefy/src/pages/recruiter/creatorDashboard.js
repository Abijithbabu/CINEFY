import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/recruiterLayout'
import { Box, Button, Container, Grid, Paper, Stack, SvgIcon, Typography } from '@mui/material'
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon'
import Table from '../../Components/creator/manageContent/table'
import { getPosts } from '../../redux/action'
import { ApexChart } from '../../Components/admin/dashboard/components/apexChart'

const ManageContent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setData(res))
  }, []); return (
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
                </Stack>
                <ApexChart data={data} />
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
