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
import { SocialIcon } from 'react-social-icons';
import { relative } from 'path/posix';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const TopSide = () => (
    <Box>
      <Box marginBottom={2} marginTop={2}>
        <Typography component={'span'} variant="h1" color={'#F8F8FF'}  sx={{ fontWeight: 675, verticalAlign:'Center', textShadow:'2px 2px #2F4F4F' }}>
          Third Eye{' '} 
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'#000066'}
            text-align={'Center'}
            sx={{
              textShadow:'2px 2px #2F4F4F',
              fontWeight: 700,
              borderWidth:'.5px',
              borderBottom:'hidden',
              borderColor:theme.palette.secondary.main,
              borderRadius:1,
              background: `linear-gradient(180deg, transparent 77%, ${alpha(
                theme.palette.secondary.main,
                0.4,
              )} 0%)`,
            }}
          >
            Society
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h5" component="span" color={'#F8F8FF'}
        sx={{
          textShadow:'2px 2px #2F4F4F',
         
          borderWidth:'1px',
          borderBottom:'hidden',
          borderColor:theme.palette.secondary.main,
          borderRadius:1,
          fontWeight: '700',
        }}>

      Opening the door on 
      </Typography>
      <Typography variant="h5" component="span" color={'MediumSeaGreen'} text-align={'Center'}       
        sx={{
          textShadow:'2px 2px #2F4F4F',
          padding: '0 7px',
          borderWidth:'1px',
          borderBottom:'solid',
          borderColor:theme.palette.secondary.main,
          borderRadius:1,
          fontWeight: '700',
        }}>
      03/03/22 07:00 PM EST 
      </Typography>
      <div> </div>
      <Typography variant="h5" component="p" color={'#F8F8FF'} position={'relative'}  text-align={'Center'} >
      to wealth and wisdom for all Apes
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'flex-start'}
        marginTop={2}
      >
        <SocialIcon url="https://twitter.com/thirdeyesociety" network="twitter" />&ensp;
        <SocialIcon url="https://discord.gg/grccYtJ2DJ" network="discord" /> &ensp;
        <SocialIcon url="https://www.instagram.com/thirdeyeapes/" network="instagram" /> &ensp;
        <SocialIcon url="https://www.facebook.com/ThirdEyeApesSociety" network="facebook" /> &ensp;
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
