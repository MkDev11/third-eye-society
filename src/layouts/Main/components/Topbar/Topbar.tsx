import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    home: Array<PageItem>;
    about: Array<PageItem>;
    team: Array<PageItem>;
    faq: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    home: landingPages,
    about: secondaryPages,
    team: companyPages,
    faq: accountPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/e7f1fc5a-9718-4fc4-3ea0-86115bb64000/public'
              : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/8f298982-0934-4ce7-d83f-788ad0f5e700/public'
          }
          height={.5}
          width={.5}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Home'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'About'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Team'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'FAQ'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
     
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="./mint"
            size="large"
          >
            Mint
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
