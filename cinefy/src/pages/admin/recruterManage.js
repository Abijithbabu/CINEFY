import React, { useEffect, useState } from "react";
import { Layout as DashboardLayout } from "../../Layouts/dashboard/layout";
import Customers from "../../Components/admin/customer/customers-page";
import { getUsers } from "../../redux/action";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import { CustomersSearch } from "../../Components/admin/customer/customers-search";

const RecruterManage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers("recruiter").then((res) => setData(res.user));
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
                <Typography variant="h4">Manage Recruters</Typography>
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
            {data.length ? <Customers data={data} /> : <div>Loading...</div>}
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default RecruterManage;
