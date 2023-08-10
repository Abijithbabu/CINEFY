import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import { SvgIcon } from '@mui/material';
import FeaturedPlayListSharpIcon from '@mui/icons-material/FeaturedPlayListSharp';
export const items = [
  {
    title: 'Overview',
    path: '/admin',
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
    title: 'Settings',
    path: '/admin/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
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
