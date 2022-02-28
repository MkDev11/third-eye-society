import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqGroupItemProps {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
  }>;
}

const FaqGroupItem = ({ title, items }: FaqGroupItemProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Basics'}
          items={[
            {
              title: 'WHATS AN NFT?',
              subtitle:
             ' NFT = Non-fungible token. Non-fungible” more or less means that it’s unique and can’t be replaced with something else. For example, a bitcoin is fungible — trade one for another bitcoin, and you’ll have exactly the same thing.',
            },
            {
              title: 'WHAT IS MINTING?',
              subtitle:
                'Minting an NFT refers to the process of turning a digital file into a crypto collectible or digital asset on the blockchain. The digital item or file is stored in this decentralized database or distributed ledger forever, and it is impossible to edit, modify, or delete it. ',
            },
            {
              title: 'HOW DO I MINT?',
              subtitle:
                'The NFTs you mint will be tied directly to your wallet which means that you’re in control, and you’ll hold and manage your funds directly. Before you get started, you’ll need to make sure you have ETH (the cryptocurrency used for all transactions on Ethereum) and a wallet set up.',
            },
            {
              title: 'WHAT WALLET DO I NEED?',
              subtitle:
                'You will need an Ethereum ERC20 Wallet in order to Mint Third Eye Apes NFTs! ',
            },
            {
              title: 'WHAT ARE THE EXACT STEPS TO MINTING?',
              subtitle:
                '1. Fund your Metamask wallet with ETH (Ethereum) 2. The day of the drop go to the homepage of our website which you can find in on our  3. Connect your wallet using the button   4. Select the number of TEAS you want and click The Mint Button  5. Approve cost + gas fees for the transaction',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Whitelist'}
          items={[
            {
              title: 'WHAT is the WHITELIST?',
              subtitle:
                'whitelisting means that a crypto wallet address is pre-approved for minting of NFTs on specified dates/times (TEAS Pre-Sale 1/11/22). That means you are able to BUY our NFT before anyone else for a lower price.',
            },
            {
              title: 'WHITELIST?',
              subtitle:
                'We will be whitelisting 1111 apes to the most trusted community members for a discounted price of .1 ETH, all whitelisted members are guaranteed to mint at least one Third Eye Ape. Therefore, by joining the Whitelist, you wont have to enter gas wars and will guarantee to get yourself an Ape before they sell out.',
            },
            {
              title: 'ENTRY OPPORTUNITIES:',
              subtitle:
                'Reach Level 11 on the server, by being active in the chat. You can level up by actively talking in the Discord or by inviting people in. No spam please.  Invite 75 people to the server (the people you invite must stay in the server and verify their account in ✅ verification). If you are an influencer and want to promote the Third Eye Apes send a message with your social media @username,  Win one of our daily giveaways',
            },
          ]}
        />
      </Box>

    </Box>
  );
};

export default Content;
