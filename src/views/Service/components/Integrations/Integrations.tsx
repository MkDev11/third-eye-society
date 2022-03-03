/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { MdAttachMoney,MdLaunch, MdGeneratingTokens, MdTerrain, MdStorefront }from 'react-icons/md';
import 'react-perfect-scrollbar/dist/css/styles.css';


const Integrations = (): JSX.Element => {
  const theme = useTheme();

  return (

    <Box>
      <Grid container spacing={-500}></Grid>
      <Typography
        component={'span'}
        variant={'h2'}
        color={'Navy'}
        sx={{ 
          textShadow:'1px 1px #2F4F4F',
          borderWidth:'1px',
          borderBottom:'hidden',
          borderColor:theme.palette.secondary.main,
          borderRadius:1,
          fontWeight: '700',
          background: `linear-gradient(180deg, transparent 86%, ${alpha(
            theme.palette.secondary.main,
            0.4,
          )} 0%)`,
        }}
      >
        RoadMap
      </Typography>
 
      <Typography component={'h2'} variant={'h5'} color={'#800000'}        
        sx={{ 
          textShadow:'1px 1px #2F4F4F',
          borderWidth:'1px',
          borderBottom:'hidden',
          borderColor:theme.palette.secondary.main,
          borderRadius:1,
          fontWeight: '700',
        }}>
        Phase 1
      </Typography>
    
    
      <Box>
        <Grid container spacing={-400} height={100}>
          <Grid item container alignItems={'space-between'} xs={100} md={100}>
            <Divider sx={{ width: 4 }} />
            <Divider sx={{ height: 10 }} />
            <Timeline minEvents="5" height="100%" width="100%" text-Shadow="2px 2px #2F4F4F"  sx={{ fontWeight:'700', color:'#001242'}}>
              <TimelineEvent
                position='relative'
                color='PaleGreen'
                icon={MdLaunch}
                title='TES V2 Launch'
                subtitle='03/03/2022 07:00 PM EST' 
                action={{
                  label: 'Mint!',
                  onClick: () => window.location.href='/not-found-cover'
                }}
                
              />
              <br></br>
              <TimelineEvent
                color='Tomato'
                icon={MdGeneratingTokens}
                title='$TES Token Launch'
                subtitle='$TES Token Airdropped to holders'
              />
              <br></br>
              <TimelineEvent
                color='Tomato'
                icon={MdStorefront}
                title='Exclusive Merch Lauch to Holders'
                action={{
                  label: 'Store coming soon',
                 
                }}
              />
              <br></br>
              <TimelineEvent
                color='Tomato'
                icon={MdTerrain}
                title='Metaverse Land Purchase'
                subtitle='at 50% sold we will purchase a plot in NFT Worlds'

              />
              <br></br>
              <TimelineEvent
                color='Tomato'
                icon={MdAttachMoney}
                title='Funding Community Wallet and formal DAO Establishment'
                subtitle='at 100% sold 30ETH witll be deposited into TES Community wallet.'
                action={{
                  label: 'Multisig Community Wallet',
                  onClick: () => window.location.href='src/views/NotFoundCover'
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
