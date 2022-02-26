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
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? 'https://drive.google.com/file/d/1JHbDh41jF35Kq8gE7pyXPZm93Y48XxkB/view?usp=sharing'
              : 'https://drive.google.com/file/d/1JHbDh41jF35Kq8gE7pyXPZm93Y48XxkB/view?usp=sharing'
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
            href="/home"
            color="text.primary"
          >
            About
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="src/views/Service/components/About"
            color="text.primary"
          >
            Components
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/demos"
            color="text.primary"
          >
            Demos
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
            href="https://mui.com/store/items/the-front-landing-page/"
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
