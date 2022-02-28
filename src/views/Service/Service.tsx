import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import NoSsr from '@mui/material/NoSsr';

import {
  About,
  Advantages,
  Integrations,
  Team,
  VideoSection,
  Faq,
} from './components';

const Agency = (): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const theme = useTheme();

  const styles = (bgImage: string) =>
    ({
      position: 'absolute',
      objectFit: 'cover',
      /* support for plugin https://github.com/bfred-it/object-fit-images */
      fontFamily: 'object-fit: cover;',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundImage: `url(${bgImage})`,
      filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
    } as const);

  return (
    <Main>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'60vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/9b116659-11f5-4528-b553-d00ba19c6c00/public',
          )}
        />
        <Container>
          <About />
        </Container>
      </Box>

      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'85vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/8e9911f3-6d16-4a1e-8987-9f5c22868000/public',
          )}
        />
        <Container>
          <VideoSection />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/db9496c5-a00b-4056-09f6-70e046ed8e00/public',
          )}
        />
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'60vh'}
        display={'flex'}
        alignItems={'top'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/fd822b20-e644-4924-62f4-55d5e9cb5700/public',
          )}
        />
        <Container>
          <Integrations />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/6e0d23a5-6815-4fc9-fd2a-5b5304348f00/public',
          )}
        />
        <Container>
          <Team />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={styles(
            'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/380f4122-8056-41a7-c6d0-e443000c8100/public',
          )}
        />
        <br></br>
        <Container>
          <Faq />
        </Container>
      </Box>
     
    
    </Main>
  );
};

export default Agency;
