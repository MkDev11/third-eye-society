/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PhoneSkeletonIllustration from 'svg/illustrations/PhoneSkeleton';
import { HorizontallyAlignedBlogCardWithShapedImage } from 'blocks/blog';

const VideoSection = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '75% !important',
              marginX: 'auto',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={'absolute'}
                top={'2.4%'}
                left={'4%'}
                width={'92.4%'}
                height={'96%'}
                sx={{
                  '& .lazy-load-image-loaded': {
                    height: 1,
                    width: 1,
                  },
                }}
              >
                <Box
                  component={LazyLoadImage}
                  src={
                    theme.palette.mode === 'light'
                      ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/5ef77d03-5761-427b-3cc3-1975d0d29400/public'
                      : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/5ef77d03-5761-427b-3cc3-1975d0d29400/public'
                  }
                  alt="Image Description"
                  effect="blur"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: 'scale-down',
                    borderRadius: '2.5rem',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              align='center'
              sx={{ fontWeight: 700, 
                background: `linear-gradient(180deg, transparent 82%, ${alpha(
                  theme.palette.secondary.main,
                  0.2,
                )} 0%)`,
                
                
              }}
            >
               How to Mint a
               Third Eye Society NFT!
            </Typography>
          </Box>

          <Box
        
            height={.75}
            width={1}
            maxHeight={400}
            maxWidth={{ xs: '400%', sm: 600 }}
            marginTop={3}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{Align:'center'}}
          >
            <Box
              component={'iframe'}
              alignItems={'center'}
              title="video"
              width="100%"
              height="100%"
              minHeight={350}
              src="https://www.youtube.com/embed/D8V8lda-xpM"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
