import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import { SvgIcon } from '@mui/material';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
import { Chat } from '@mui/icons-material';
export const items = [
  {
    title: 'Overview',
    path: '/creatorDashboard', 
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Applications',
    path: '/manageApplications',
    icon: (
      <SvgIcon fontSize="small">
        <CoPresentRoundedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Applicants',
    path: '/manageApplicants',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Manage Contents',
    path: '/manageContents',
    icon: (
      <SvgIcon fontSize="small">
        <FeaturedPlayListSharpIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Messages',
    path: '/chat',
    icon: (
      <SvgIcon fontSize="small">
        <Chat />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/admin/account',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },

];
