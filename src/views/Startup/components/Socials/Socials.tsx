import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SocialIcon } from 'react-social-icons';

const mock = [
  {

    url:'https://twitter.com/thirdeyesociety',
    network:'twitter',
  },
  {

    url:'https://discord.gg/grccYtJ2DJ',
    network:'discord',
    bgColor:'LemonChiffon'
  },
  {

    url:'https://www.instagram.com/thirdeyeapes/',
    network:'instagram',
  },
  {
    url:'https://www.facebook.com/ThirdEyeApesSociety',
    network:'facebook',
  },

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
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box maxWidth={120} key={i} marginX={3}>
            <Box
              component={SocialIcon}
              height={1}
              width={1}
              url={item.url}
              network={item.network}
              bgColor={item.bgColor}


            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
