import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Team,
  Mission,
  Home,
  Socials,
  Process,
  FAQ,
  RoadMap,
} from './components';

const Startup = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Home />
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Socials />
        </Container>
      </Box>
      <Container>
        <Mission />
      </Container>
      <Container>

        <Container paddingX={'0 !important'} maxWidth={1}>
          <Process />
        </Container>

      </Container>
      <Container>
        <RoadMap />
      </Container>
      <Divider />
      <Container>
        <Team />  
      </Container>
      <Divider />
      <Container>
        <FAQ />
      </Container>
    </Main>
  );
};

export default Startup;
