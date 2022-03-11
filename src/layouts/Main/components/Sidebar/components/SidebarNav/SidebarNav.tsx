import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    home: Array<PageItem>;
    about: Array<PageItem>;
    team: Array<PageItem>;
    faq: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    home: landingPages,
    about: secondaryPages,
    team: companyPages,
    faq: accountPages,
   
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Third Eye Society"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/ffeff217-f527-4d4c-c9bf-b500006eb800/public'
                : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/4acc6e55-8057-42f1-bb6a-87a850d9bc00/public'
            }
            height={'100%'}
            width={'225%'}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem  title={'Home'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'About'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Team'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'FAQ'} items={accountPages} />
        </Box>

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            href="https://mint.thirdeyesociety.io"
          >
            Mint
          </Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default SidebarNav;
