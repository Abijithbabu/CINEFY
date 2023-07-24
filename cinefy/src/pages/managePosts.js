import React, { useEffect, useState } from "react";
import { Layout as DashboardLayout } from "../Layouts/dashboard/layout";
import Customers from "../Components/customer/customers-page";
import { getPosts } from "../redux/action";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import { CustomersSearch } from "../Components/customer/customers-search";
import  ListJobs  from '../Components/manageJob/listJobs'

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
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Manage CastingCalls</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
            </Stack> 
            <CustomersSearch /> 
            {data.length ? <ListJobs data={data} /> : <div>Loading...</div>}
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default ManagePosts;
