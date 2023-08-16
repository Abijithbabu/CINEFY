import React from 'react'
import Layout from '../../Layouts/recruiterLayout'
import Ads from '../../Components/creator/manageSubmissions/ads'
import { Stack, Typography } from '@mui/material'
function manageApplications() {
    return (
        <>
            <Layout>
            <Stack spacing={5}>

              <Typography variant="h4">
               Manage Casting Calls
              </Typography>
            <Ads/>
            </Stack>
            </Layout>
        </>
    )
}

export default manageApplications
