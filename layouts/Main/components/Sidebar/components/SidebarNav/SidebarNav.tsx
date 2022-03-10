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
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'dark'
                ? 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/86f01e4a-c777-4f7c-ac73-d6d9ac4ba900/public'
                : 'https://imagedelivery.net/9PTGu0HbkQc8QazDcIVWeA/8f298982-0934-4ce7-d83f-788ad0f5e700/public'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Home'} items={landingPages} />
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
            variant="outlined"
            fullWidth
            component="a"
            href=""
          >
            Mint
          </Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default SidebarNav;
