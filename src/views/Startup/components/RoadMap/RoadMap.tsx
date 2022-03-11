import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Container from 'components/Container';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const mock = [
  {
    title: 'Third Eye Ape V2 Launch',
    subtitle:
      '3/3/2022',
    description:
      'A Collection of 20,000 of the Wisest & Wealthiest Apes, containing a mix of both Lady Apes and their GentleApe counterparts ',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: '$TES Token Launch',
    subtitle:
      '3/25/2022',
    description:
      '$TES Token Launch, Soft Staking & Token distribution by Airdrop, future plans include listing to uniswap',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'TEASv2 NFT Staking',
    subtitle:
      'Staking available at 25% sold',
    description:
     'A liquidity pool will be set up to enable the staking of TEASv2 NFTs',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Merch Store Launch',
    subtitle:
      'Store coming soon',
    description:
      'Exclusive Merch Launch to Holders, with a future storefront in the SandBox',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'MetaVerse Land',
    subtitle: '50% Sold',
    description:
      ' We will purchase a plot in NFT Worlds',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'Funding of Community Wallet & DAO Establishment',
    subtitle:
      '100% Sold',
    description:
      '20% of mint funds will be deposited into the community wallet',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const Work = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box bgcolor="alternate.main">
      <br></br>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        
        }}
        variant={'h5'}
        color={'secondary.main'}
        align={'center'}
      >
        RoadMap
      </Typography>
      <Container maxWidth={850}>

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            padding: 0,
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          {mock.map((item, i) => (
            <ListItem sx={{ alignItems: 'unset' }} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                </ListItemIcon>
                <Box
                  display={i === mock.length - 1 ? 'none' : 'flex'}
                  flex={'1 1 0%'}
                  borderRight={`1px solid ${theme.palette.divider}`}
                />
              </Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{ fontWeight: 700 }}
                />
                <Box marginTop={2}>
                  <Typography variant={'subtitle2'}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  
  );
};

export default Work;
