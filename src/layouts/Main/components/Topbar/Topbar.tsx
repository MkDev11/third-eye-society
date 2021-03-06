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
    about: AboutPages,
    team: companyPages,
    faq: secondaryPages,
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
        title="Third Eye Society"
        width={{ xs: 100, md: 100 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/ffeff217-f527-4d4c-c9bf-b500006eb800/public'
              : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/4acc6e55-8057-42f1-bb6a-87a850d9bc00/public'
          }
          height={'200%'}
          width={'250%'}
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
            items={AboutPages}
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
            href='https://mint.thirdeyesociety.io'
            size="large"
            border-radius="10"
            
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
