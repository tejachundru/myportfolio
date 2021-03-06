import React from 'react';
import { Typography, Grid, useTheme } from '@mui/material';
import Teja from './TejaName';
import WhatIDo from './WhatIDo';

function Home() {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          flex: 1,
          backgroundColor: theme.palette.primary.main,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container flexDirection="row">
          <Grid container flexDirection="row" margin={4}>
            <Typography
              variant="h1"
              // sx={{
              //   color: '#fff',
              // }}
            >
              Hi I&apos;m
            </Typography>
            <Teja />
          </Grid>
        </Grid>
      </div>
      <WhatIDo />
    </>
  );
}

export default Home;
