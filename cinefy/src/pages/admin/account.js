import { useSelector } from 'react-redux';
import AccountProfile from '../../Components/admin/account/account-profile'
import { AccountProfileDetails } from '../../Components/admin/account/account-profile-details';
import { Layout as DashboardLayout } from '../../Layouts/dashboard/layout';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';

const Account = () => {
  const { data } = useSelector((store) => store);
  console.log(data);

  return (
    <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8
          }}
        >
          <Container maxWidth="lg"> 
            <Stack spacing={3}>
              <div>
                <Typography variant="h4">
                

                </Typography>
              </div>
              <div>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    xs={12}
                    md={6}
                    lg={4}
                  >
                    <AccountProfile />
                  </Grid>
                  <Grid
                    xs={12}
                    md={6}
                    lg={8}
                  >
                    <AccountProfileDetails />
                  </Grid>
                </Grid>
              </div>
            </Stack>
          </Container>
        </Box>
    </DashboardLayout>
  );
}
export default Account