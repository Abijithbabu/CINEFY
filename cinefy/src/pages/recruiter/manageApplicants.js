import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/recruiterLayout";
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
import Table from "../../Components/creator/manageApplicants/table";
import { getAllApplicants, getPostDetails, getUsers } from "../../redux/action";
import { useLocation } from "react-router";
import queryString from "query-string";
import { useSelector } from "react-redux";

const ManageContent = () => {
  const user = useSelector((store) => store?.data?.user);
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [data, setData] = useState([]);
  useEffect(() => {
    queryParams?.post
      ? getPostDetails(queryParams.post).then((res) => {
          const data = res.applicants.map((x) => ({
            ...x.user,
            status: x.status,
          }));
          setData(data);
        })
      : getAllApplicants(user._id).then((res) => setData(res));
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
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Manage Applicants</Typography>
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
              {data?.length ? (
                <Table data={data} select={queryParams.id} post={queryParams.post}/>
              ) : (
                <div>Loading...</div>
              )}
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default ManageContent;
