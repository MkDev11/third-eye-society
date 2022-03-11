import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeModeToggler } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={'a'}
        href="/"
        title="ThirdEyeSociety"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/86f01e4a-c777-4f7c-ac73-d6d9ac4ba900/public'
              : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/8f298982-0934-4ce7-d83f-788ad0f5e700/public'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={3}>
          <Link underline="none" component="a" href="/" color="text.primary">
            Home
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/"
            color="text.primary"
          >
            About
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/"
            color="text.primary"
          >
            Team
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/"
            color="text.primary"
          >
            FAQ
          </Link>
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mint.thirdeyesociety.io"
            size="large"
          >
            Mint
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
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
