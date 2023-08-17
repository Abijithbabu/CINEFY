import { useSelector } from 'react-redux';
import AccountProfile from '../../Components/admin/account/account-profile'
import { AccountProfileDetails } from '../../Components/admin/account/account-profile-details';
import { Layout as DashboardLayout } from '../../Layouts/dashboard/layout';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import Hero from '../../Components/admin/dashboard/hero'
const Dashboard = () => {
  const { data } = useSelector((store) => store);
  console.log(data);

  return (
    <DashboardLayout>
       <Hero/>
    </DashboardLayout>
  );
}
export default Dashboard