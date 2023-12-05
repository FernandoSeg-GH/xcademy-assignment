// import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto';
// import { isBech32, isAddress } from '@zilliqa-js/util/dist/validation';

/**
 * TODO [Part 1]:
 * Use the '@zilliqa-js/crypto' package to convert a Bech32 address to a Base16 address.
 * Allow the user to enter a Bech32 address, displaying the converted Base16 address on-screen.
 * -------++++++-----++++++-----++++++-----++++++-------
 * -----++++++-----++++++- HECHO -++++++-----++++++-----
 * -------++++++-----++++++-----++++++-----++++++-------
 * 
 * Example: 
 *    Bech32 Address: zil1tym3sy8sary2y3lqy56dx4ej9v7fsxku52gl6z
 *    Base16 Address: 0x59371810F0E8c8a247E02534D357322B3c981AdC
 * 
 * 
 * TODO [Part 2]:
 * Using the "price" API, display the current XCAD price on-screen.
 * -------++++++-----++++++-----++++++-----++++++-------
 * -----++++++-----++++++- HECHO -++++++-----++++++-----
 * -------++++++-----++++++-----++++++-----++++++-------
 *  
 * TODO [Part 3]:
 * Using the "balance" API, add button to allow a user to query the balance of any valid Base16 and Bech32 address.
 * Display the balance of the address on the client.
 * -------++++++-----++++++-----++++++-----++++++-------
 * -----++++++-----++++++- HECHO -++++++-----++++++-----
 * -------++++++-----++++++-----++++++-----++++++-------
 */

// # XCAD Network Developer Interview Assignment

// Tasks are segmented based on levels of seniority, feel free to do as many as you want, although you may not be required to finish them and you will be questioned in a follow-up interview about how you resolved them.

// ## Task

// We require you to create a NextJS TypeScript project. The project requires the following:

// ### Querying Lastest Average Prices (USD)

// 1. Create a page that queries the following endpoints and displays the latest average prices (USD) in a user friendly way on the page (both on mobile and desktop devices).

// - CoinGecko (https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd)
// - ZilStream (https://io-cdn.zilstream.com/chart/aggr/zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y)
// - CryptoRank (https://api.cryptorank.io/v0/charts/prices-by-coin?keys=xcad-network&days=7)
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 2. Store these average prices in a global store using redux.
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 3. Create a selector that calculates the average value of all prices.
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 4. Periodically poll these prices and update the average price on-screen accordingly. Include a button on-screen that also requests the prices. Display the change in price to the user.
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// ### Querying Balances - Zilliqa Package

// 1. Create an input on-screen to allow a user to input an address (Base16, convert an address if Bech32).

// _Example_:

// - Bech32 Address: zil1aa6pc34xa72duchewmq8nlrt8ygf82s9h826js
// - Base16 Address: 0xeF741c46a6Ef94De62f976c079fC6b391093aA05
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 2. Using the '@zilliqa-js/crypto' (Zilliqa) package, query the following smart contract to get the user's XCAD smart contract balance (_Hint_: Query the smart contract state using `getState`, do not use `getBalance`, we require the smart contract 'balance', not the Zilliqa token balance).

// - XCAD Smart Contract Address: `zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y`
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 3. Display the XCAD balance on screen with its equivalent USD value using the average price in the previous step.

// ### BONUS - Token Approve - Ethers Package

// 1. Create a function that calls the `approve` method of this token contract (This contract is on BSC Testnet)

// - XCAD Token Smart Contract Address: `0xCfD9F58d0E9F035890DB489B9785d5c230Da01Ba`
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 2. Using the 'ethers' (Ethereum) package, connect with the contract in order to call the method (_Hint_: You need to provide a valid wallet with some balance you can use this faucet https://testnet.bnbchain.org/faucet-smart).
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// 3. Display an status toast when the calls ends
// -------++++++-----++++++-----++++++-----++++++-------
// -----++++++-----++++++- HECHO -++++++-----++++++-----
// -------++++++-----++++++-----++++++-----++++++-------

// ### Bonus

// - App/Website Styling -----++++++----- OK
// - Single Unit and E2E Test Case (Jest, Cypress) -----++++++----- OK
// - Linting and Code Structure -----++++++----- OK
// - GitHub Actions Template -----++++++----- NOT DONE, WHAT DO YOU MEAN BY THIS?
// - Deployment of the project -----++++++----- OK

// ## Job Specific Directives
// ** Minimum Requirements **

// - Typescript
// - Communication with RESTful API
// - Basic React Knowledge - Components and Hooks
// - Basic Code Readability/Structure

// **Software Engineer I**

// - Component Libraries (e.g. MUI)
// - State Management (Redux toolkit or Context)
// - Next JS (SSR, Middleware)
// - Basic Unit Testing (Jest)
// - Responsiveness (Mobile, etc)

// **Software Engineer II**

// - Advanced Project Structuring
// - Advanced Testing (Cypress, Jest)
// - Basic Crypto Knowledge
//   - Fetching Smart Contract States
//   - Querying Token Balances
// - Elegantly Handling Transitions, Fetching and Error States
// - Data Fetching and Caching (React Query or SWR)

// **Software Engineer III**

// - Strong Crypto Knowledge (Zilliqa, Ethers)
// - Wallet Connections
// - Smart Contract Interactions (ABI Typing)
// - Transaction Handling

import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head' 
import { Typography, Grid, Input, Box, Container, Stack, Toolbar, AppBar, Button } from '@mui/material';
import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto';
import Toaster from '../components/Toaster';
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";

type Props = {}

const Home: NextPage<Props> = ({}) => {
  const [inputAddress, setInputAddress] = useState('');
  const [bech32Address, setBech32Address] = useState('');
  const [base16Address, setBase16Address] = useState('');
  const [prices, setPrices] = useState({
    coingecko: null,
    zilStream: null,
    cryptoRank: null,
    average: null
  });
  const [balance, setBalance] = useState<string | null>(null);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [userAddress, setUserAddress] = useState<string>('');
  
  // Traer el precio de XCAD
  const fetchPrice = async () => {
    try {
      const response = await fetch('/api/price');
      const data = await response.json();
      setPrices(data.prices);
    } catch (error) {
      console.error('Failed to fetch prices');
      openToast('Failed to fetch prices', 'error');
    }
  };

  // Traer el precio de XCAD al cargar la página
  useEffect(() => {
    fetchPrice(); // 
  }, []);

  // check if metamask is installed
  const isMetaMaskInstalled = () => {
    const { ethereum } = window as any;
    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return false;
    } else {
      console.log('Metamask is installed!');
    }
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  useEffect(() => {
    isMetaMaskInstalled();
  }, []);

  // Conectar la wallet
  // const connectWallet = async () => {
  //   if (typeof window.ethereum !== 'undefined') {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  //       // Request account access
  //       await provider.send("eth_requestAccounts", []);
  //       const signer = provider.getSigner();
  //       setUserAddress(await signer.getAddress());
  //     } catch (error) {
  //       console.error(error);
  //     } 
  //   } else {
  //     alert('MetaMask is not installed!');
  //   }
  // };


  // Traer el balance del balance del contrato
  const fetchBalance = async (address: string) => {
    if (!address) {
      openToast('Please enter a valid address', 'error');
      return;
    }

    try {
      const response = await fetch(`/api/balance?address=${address}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBalance(data.balance);
    } catch (error) {
      console.error('Failed to fetch balance', error);
      openToast('Failed to fetch balance', 'error');
    }
  };

  // 4) Convertir la dirección de bech32 a base16 
  const handleAddressConversion = (address: string) => {
    try {
      if (address.startsWith('zil')) {
        const base16 = fromBech32Address(address).toLowerCase();
        setBech32Address(address);
        setBase16Address(base16);
      } else {
        const bech32 = toBech32Address(address);
        setBech32Address(bech32);
        setBase16Address(address.toLowerCase());
      }
    } catch (error) {
      console.error('Invalid address format');
      openToast('Invalid address format', 'error');
      setBase16Address('');
      setBech32Address('');
    }
  };

  // Actualizar el precio cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrice();
    }, 120000); 
    return () => clearInterval(interval); 
  }, []);  

  const openToast = (message: string, severity: any = 'info') => {
    setToast({ open: true, message, severity });
};

  return (
    
    <Box >
      <AppBar position='fixed'>
        <Container>
          <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
            <Typography variant="h6" component="div" style={{display:"none"}}>XCademy Price Tracker </Typography>
            <img src="https://www.xcademy.com/defc893fd64646d3b86cab2b41ca55a6.png" alt="logo" width="300" height="50" />
            <Typography>XCAD: 0.00</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Container>
        <Head>
          <title>Address Converter</title>
          <meta name="description" content="Zilliqa Address Converter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Stack mt={16} alignItems="center"> 
          <Grid container maxWidth={600} spacing={3}>
            <Grid item xs={6} >
              <Input
                fullWidth
                placeholder='Bech32 Address'
                value={bech32Address}
                onChange={(e) => handleAddressConversion(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} >
              <Input
                fullWidth
                placeholder='Hex Address'
                value={base16Address}
                disabled
              />
            </Grid>
          </Grid>
        </Stack>

        <Stack mt={16} alignItems="center">
          <Grid container maxWidth={600} spacing={3}>
            <Button fullWidth variant='contained' onClick={fetchPrice}>Get CoinGecko Price</Button>
            <Button fullWidth variant='contained' onClick={() => fetchBalance(base16Address)}>Get Balance</Button>
          </Grid>
        </Stack>

        <Toaster open={toast.open} message={toast.message} severity={toast.severity as any} />

        {prices.coingecko && <Typography>Coingecko Price: {prices.coingecko}</Typography>}
        {prices.zilStream && <Typography>ZilStream Price: {prices.zilStream}</Typography>}
        {prices.cryptoRank && <Typography>CryptoRank Price: {prices.cryptoRank}</Typography>}
        {prices.average && <Typography>Average Price: {prices.average}</Typography>}

        
      </Container>
    </Box>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default Home;
