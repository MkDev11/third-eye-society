/* eslint-disable react/no-unescaped-entities */
import React, { Component }  from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


const Integrations = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  return (

    <Box>
      <Grid container spacing={-500}></Grid>
      <Typography
        variant={'h2'}
        color={'Navy'}
        sx={{ fontWeight: 700, height: -700}}
       
      >
        RoadMap
      </Typography>
 
      <Typography component={'h2'} variant={'h5'} color={'text.secondary'}>
        Phase 1
      </Typography>
    
    
      <Box>
        <Grid container spacing={-400} position={'relative'} height={70}>
          <Grid item container alignItems={'space-between'} xs={100} md={100}>
            <Divider sx={{ width: 4 }} />
            <Divider sx={{ height: 20 }} />
            <Timeline minEvents="5" placeholder>
              
              <TimelineEvent
              
                color='PaleGreen'
                icon={FaRegFileAlt}
                title='Digital Collectible Launch'
                subtitle='03/03/2022 07:00 PM EST'
                action={{
                  label: 'Mint coming soon!',
                  onClick: () => window.location.href='https://mint.thirdeyesociety.io'
                }}
              />
              <TimelineEvent
                color='Tomato'
                icon={FaRegCalendarCheck}
                title='$TES Token Launch'
                subtitle='$TES Token Airdropped to holders'
              />
              <TimelineEvent
                color='Tomato'
                icon={FaBug}
                title='Exclusive Merch Lauch to Holders'
                
                action={{
                  label: 'Store coming soon',
                  onClick: () => window.alert('Erro!')
                }}
              />
              <TimelineEvent
                color='Tomato'
                icon={FaBug}
                title='Metaverse Land Purchase'
                subtitle='at 50% sold we will make a purchase in NFT Worlds'
                action={{
                  label: 'World in NFT Worlds and Sandbox',
                  onClick: () => window.alert('Coming Soon')
                }}
              />
              <TimelineEvent
                color='Tomato'
                icon={FaBug}
                title='Funding Community Wallet and DAO'
                subtitle='at 100% sold we will denotate 30ETH to our '
                action={{
                  label: 'Multisig Community Wallet',
                  onClick: () => window.alert('Coming soon')
                }}
              />
            </Timeline>
          </Grid>
        </Grid>
      </Box>
    </Box>

  
  );
};

export default Integrations;
