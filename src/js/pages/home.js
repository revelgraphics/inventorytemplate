import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';


function Home() {

    return (
        <Grid>
            <Typography>Home</Typography>
        </Grid>
    )
}

export const HomeWithRouter = withRouter(Home);
