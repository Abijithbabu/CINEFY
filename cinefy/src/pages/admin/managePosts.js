import React, { useEffect, useState } from "react";
import { Layout as DashboardLayout } from "../../Layouts/dashboard/layout";
import { getPosts } from "../../redux/action";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import {Search} from '../../Components/castingCall/search'
import { JobCards } from '../../Components/castingCall/card'

const ManagePosts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setData(res))
  }, []);

  return (
    <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
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
                Companies
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
          <Search />
          <Grid
            container
            spacing={1}
          >
            {data.map((post) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}      
                key={post.id}

              >
                <JobCards data={post} />
              </Grid>
            ))}
          </Grid>
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          > */}
            {/* <Pagination
              count={3}
              size="small"
            /> */}
          {/* </Box> */}
        </Stack>
      </Container>
    </Box>
   </DashboardLayout> 
  )
};

export default ManagePosts
