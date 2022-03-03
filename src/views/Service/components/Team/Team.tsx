import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';

import Container from 'components/Container';

const mock = [
  {
    name: 'GMONEY',
    title: 'Founder, Marketing',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/a07cfdca-e8e4-41bc-cf17-1a1e1cd8ae00/public',
    href: 'https://twitter.com/realgmoneybaby',
  },
  {
    name: 'GHOST',
    title: 'Founder, Marketing',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/5ec0b2ea-f704-4531-6704-e2c547aedf00/public',
    href: 'https://twitter.com/GhosttrapperUSA',
  },
  {
    name: 'Mukubass',
    title: 'Developer',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/3df71f08-9905-4a89-a06f-49ba7a2bd600/public',
    href: 'https://twitter.com/mukubass',
  },
  {
    name: 'TOXIC',
    title: 'Head Mod',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/f85fb13e-9725-4cb4-6ba6-604d313b0a00/public',
    href: 'https://twitter.com/ThirdEyeApe97',
  },
  {
    name: 'Kacey',
    title: 'Community Manager',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/4ae580b3-be22-49d5-0069-18cd76e9df00/public',
    href: 'https://twitter.com/kclajoie',
  },
  {
    name: 'Deana',
    title: 'Community Manager',
    avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/9786dd82-e943-4090-d216-61600fbaac00/public',
    href: 'https://twitter.com/deana_mandigo',
  },
];

const Reviews = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        position: 'relative',
        '&::after': {
          position: 'relative',
          content: '""',
          width: '30%',
          height: '50%',
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            variant={'h4'}
            color={'#f9b934'}
            align={'center'}
            fontWeight={700}
          >
            Meet Our Team
          </Typography>



        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box component={Card} boxShadow={0} bgcolor={'#f9b934'}>
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    secondary={item.title}

                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                  <Box marginTop={1}>

                    <IconButton
                      aria-label="twitter"
                      size={'small'}
                      color={'default'}
                      href={item.href}

                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Reviews;