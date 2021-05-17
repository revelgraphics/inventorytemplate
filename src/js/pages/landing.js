import React from 'react'
import { withRouter } from 'react-router';
import { TopNav } from '../components';
import { Typography, Grid  } from '@material-ui/core';

function Landing() {

    return (
        <Grid>
            <TopNav />
            <Typography>Landing</Typography>
            
        </Grid>
    )
}

export const LandingWithRouter = withRouter(Landing);
