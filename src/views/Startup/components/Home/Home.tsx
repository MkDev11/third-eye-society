/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha,useTheme } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'components/Container';



const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box >
        <Typography component={'span'} variant="h1" color={'#F8F8FF'}  sx={{ fontWeight: 675, verticalAlign:'Center', textShadow:'2px 2px #2F4F4F' }}>
      Third Eye{' '} 
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'#DAA520'}
            text-align={'Center'}
            sx={{
              textShadow:'2px 2px MidnightBlue',
              fontWeight: 700,
              borderWidth:'.5px',
              borderBottom:'hidden',
              borderTop:'hidden',
              borderColor:theme.palette.secondary.main,
              borderRadius:1,
              background: `linear-gradient(180deg, transparent 80%, ${alpha(
                theme.palette.primary.main,
                0.2,
              )} 0%)`,
            }}
          >
            Society
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h4" component="span" color={'#F8F8FF'}
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
      <Typography variant="h4" component="span" color={'MediumSeaGreen'} text-align={'Center'}       
        sx={{
          textShadow:'2px 2px #2F4F4F',
          padding: '0 7px',
          borderWidth:'1px',
          borderBottom:'solid',
          borderColor:theme.palette.secondary.main,
          borderRadius:1,
          fontWeight: '700',
          
        }}>
      04/04/2022 
      </Typography>
      <div> </div>
      <Typography variant="h5" component="p" color={'#F8F8FF'} position={'relative'}  text-align={'Center'} >
      to wealth and wisdom for all Apes
      </Typography>
      <Button component={'a'} variant={'contained'} color={'primary'} size={'large'} href={'https://mint.thirdeyesociety.io'} sx={{ textShadow:'2px 2px #2F4F4F',
        padding: 'relative',
        width:'66%',
        borderBottom:'hidden',
        borderColor:'RebeccaPurple',
        borderRadius:5,
        fontWeight: '700',
        background: `linear-gradient(180deg, transparent 0%, ${alpha(
          theme.palette.primary.main,
          0.4,
        )} 0%)`,
      }} >
        <Typography variant="h5" color={'#F8F8FF'} position={'relative'}  text-align={'Center'}  >
        Mint
        </Typography>
      </Button>
    </Box>
  );

  const RightSide = (): JSX.Element => {
    return (
      <Box
        position={'sticky'}
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'contain',
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          
          src={'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/e8f2d0da-8de6-4088-8997-93f157961d00/public'}
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 200, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };



  return (
    <Box position={'relative'} zIndex={2}>
      <Box width={'100%'}height={'100%'} position={'absolute'} overflow={'auto'}>
        <Box
          width={'150%'}
          height={'100%'}
          position={'relative'}
          top={'50%'}
          left={'50%'}
          sx={{ transform: 'translate(-50%,-50%)' , filter: 'focus(3px)'}}
        >
          <iframe
            width="100%"
            height="100%" 
            src="https://iframe.videodelivery.net/4373f8790fff8ef0b229da523d538aef?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2F4373f8790fff8ef0b229da523d538aef%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
            title="YouTube video player" 
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            
          />
        </Box>
      </Box>
      <Box
        position={'relative'}
        zIndex={2}
        minHeight={{ xs: 'calc(100vh - 158px)', md: 'calc(100vh - 230px)' }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={-13}
        paddingTop={13}
        sx={{
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.primary.dark,
            backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.dark} 0%, #031024 60%)`,
            opacity: '0.9',
            width: 1,
            height: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 3,
          },
        }}
      >
        <Container position={'relative'} zIndex={4}>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            position={'relative'}
            minHeight={{ md: 100 }}
            
          >
            <Box
              width={1}
              order={{ xs: 2, md: 1 }}
              display={'flex'}
              alignItems={'center'}
            >
              <Container>
                <LeftSide/>
              </Container>
            </Box>
            <Box
              sx={{
                flex: { xs: '0 0 100%', md: '0 0 50%' },
                position: 'relative',
                maxWidth: { xs: '100%', md: '50%' },
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50vw' },
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      overflow: 'hidden',
                      left: '0%',
                      width: 1,
                      height: 1,
                      position: { xs: 'relative', md: 'absolute' },
                      clipPath: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                      shapeOutside: {
                        xs: 'none',
                        md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                      },
                    }}
                  >
                    <RightSide />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        
      </Box>
    </Box>
  );   
};

export default Hero;
