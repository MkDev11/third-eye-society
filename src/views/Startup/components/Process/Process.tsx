import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from 'react-slick';

const mock = [
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/ec2ee1f6-4316-409d-675c-eb2c92e4ee00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/6665dc4c-fb32-45fd-b6c5-f838b9047e00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/accc59e2-4593-4c18-69e7-30691baefb00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/d67b9da0-ebe9-4be5-64b4-048991c1c500/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/11f782b0-276c-4a56-eb86-0c63b2327d00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/8ae78969-42ac-47f7-031e-050543b0de00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/4371b93f-86ac-4119-d83b-bab87fb76e00/public',
  'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/7c079481-217d-414d-6e19-689d90548900/public',

];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box>
      <Card sx={{ boxShadow: 4 }} data-aos={'fade-up'}>
        <CardContent sx={{ padding: { sm: 4 } }}>

          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box maxWidth={120} key={i} marginX={3}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item}
                  alt="..."

                />
              </Box>
            ))}
          </Slider>

        </CardContent>
      </Card>
    </Box>
  );
};

export default Partners;
