/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa';
const mock = [


];

const Integrations = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (

    <Box>
      <Typography
        variant={'h3'}
        color={'primary'}
        sx={{ fontWeight: 700 }}
      >
        RoadMap
      </Typography>
 
      <Typography component={'p'} color={'text.secondary'}>
        Loved by business and individuals across the globe.
      </Typography>
    
    
      <Box>
        <Grid container spacing={-200}>
          <Grid item container alignItems={'space-between'} xs={15} md={100}>
            <Divider sx={{ width: 2 }} />
            <Timeline minEvents="5" placeholder>
              <TimelineEvent
                icon={FaRegFileAlt}
                title='Digital Collectible Launch'
                subtitle='03/03/2022 07:00 PM EST'
                action={{
                  label: 'Mint coming soon!',
                  onClick: () => window.location.href='https://mint.thirdeyesociety.io'
                }}
              />
              <TimelineEvent
                color='#87a2c7'
                icon={FaRegCalendarCheck}
                title='$TES Token Launch'
                subtitle='03/09/2022 09:51'
              />
              <TimelineEvent
                color='#9c2919'
                icon={FaBug}
                title='Erro'
                subtitle='26/03/2019 09:51'
                action={{
                  label: 'Ver detalhes...',
                  onClick: () => window.alert('Erro!')
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
