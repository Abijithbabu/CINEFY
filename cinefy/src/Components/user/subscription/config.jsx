import { Link, Typography } from "@mui/material";

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          ArtistoClub
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
  
 export const tiers = [
    {
      title: 'Free',
      price: 0,
      description: [
          '10 applications per month',
          'No hidden charges',
        'Free access to contents',
        'validity - NA',
      ],
      buttonText: ' free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: 29,
      description: [
        'Unlimited Applications',
        'see who viewed your profile',
        'chat with casting directors',
        'validity 1 month',
      ],
      buttonText: 'Buy now',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: 299,
      description: [
        'Unlimited Applications',
        'see who viewed your profile',
        'chat with casting directors',
        'validity 1 yr',
      ],
      buttonText: 'Buy now',
      buttonVariant: 'outlined',
    },
  ];