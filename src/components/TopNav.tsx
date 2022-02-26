import React from 'react';
import Box from '@mui/material/Box';

import ThemeModeToggler from 'components/ThemeModeToggler';

interface Props {
  colorInvert?: boolean;
}
const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
  return (
    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
      <Box>
        <ThemeModeToggler />
      </Box>
    </Box>
  );
};

export default TopNav;
