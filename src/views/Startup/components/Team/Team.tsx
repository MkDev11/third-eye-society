import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';


const Team = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Trust in our Execution
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
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
            name: 'Tev',
            title: 'Artist & Creative Director',
            avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/e4f757df-cb00-4d54-abd2-dd9c45feee00/public',
            href: 'https://twitter.com/artbytev',
          },
          {
            name: 'Mukubass',
            title: 'Developer',
            avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/d016bfe0-d419-4c67-1a18-4e741f9bd700/public',
            href: 'https://twitter.com/mukubass',
          },
          {
            name: 'TOXIC',
            title: 'Head Mod',
            avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/fbdd4c9c-09f2-4ca4-32e9-b34523aa8900/public',
            href: 'https://twitter.com/ThirdEyeApe97',
          },
          {
            name: 'Kacey',
            title: 'Community Manager',
            avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/7939dc5a-a030-4d02-b702-145773576d00/public',
            href: 'https://twitter.com/kclajoie',
          },
          {
            name: 'Deana',
            title: 'Community Manager',
            avatar: 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/07cf4836-709c-465c-8474-09b83376f000/public',
            href: 'https://twitter.com/deana_mandigo',
          },
        ].map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: 'transparent',
                backgroundImage: 'none',
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}

                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={'transparent'}
                marginTop={-5}
              >
                <Box component={Card} borderRadius={2}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                    <Box>
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
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
