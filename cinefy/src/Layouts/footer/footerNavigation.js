import React from 'react'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
// import type { Navigation } from '@/interfaces/navigation'
// import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import FooterSectionTitle from './footerSectionTitle'
import { Link } from 'react-router-dom'

const courseMenu = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = [
    {
      label: 'Home',
      path: '#', // '/',
    },
    {
      label: 'Courses',
      path: 'popular-course', // '/popular-course',
    },
    {
      label: 'Testimonial',
      path: 'testimonial', // '/testimonial',
    },
    {
      label: 'Mentor',
      path: 'mentors', // '/mentors',
    },
  ]

const companyMenu = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]


const NavigationItem = ({ label, path }) => {
  return (
    <MuiLink
      component={Link}
      to={path}
      underline="hover"
      sx={{
        display: 'block',
        mb: 1,
        color: 'primary.contrastText',
      }}
    >
      {label}
    </MuiLink>
  )
}

const FooterNavigation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Course" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
