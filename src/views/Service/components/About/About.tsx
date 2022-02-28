/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';
import Link from '@mui/material/Link';
import { Button, buttonClasses } from '@mui/material';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const TopSide = () => (
    <Box>
      <Box marginBottom={2} marginTop={2}>
        <Typography component={'span'} variant="h1" sx={{ fontWeight: 600, verticalAlign:'Center' }}>
        Third Eye{' '}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Society
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'text.secondary'}>
      Opening the door to wealth and wisdom for all Apes.
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'flex-start'}
        marginTop={2}
      >
        {[
          'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/5b473795-8dfe-4d3e-7109-180e889e7900/public',
          'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/01d3fa30-c2fa-4cb4-0e5a-b69a76e55e00/public',

        ].map((item, i) => (
          <Box maxWidth={70} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
            
              sx={{
                
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'contrast(0) brightness(0)',
                
              }}
            />
            
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={2} alignItems={'top'} >
      <Grid item container alignItems={'center'} xs={5} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <TopSide />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
              maxWidth: '96%',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'top' }}
              >
                <LaptopSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'8.4%'}
                left={'12%'}
                width={'76%'}
                height={'83%'}
                border={`1px solid ${theme.palette.alternate.dark}`}
                zIndex={3}
                sx={{
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={'iframe'}
                  title="video"
                  width="100%"
                  height="100%"
                  minHeight={250}
                  src="https://www.youtube.com/embed/0dWQhPuuG-k?autoplay=1&controls=1&loop=1playlist=PLxK1IGEFZi6OkFroD0THpEHcM1BZX4TFG;"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                  boxShadow={4}
                  borderRadius={2}
                 
                
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
