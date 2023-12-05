import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto';
import { BrowserProvider, ethers, JsonRpcSigner, Log } from "ethers";
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import Hero from '../components/Hero';
import CoinGecko from '../components/icons/CoinGecko';
import ZilStream from '../components/icons/ZilStream';
import CryptoRanks from '../components/icons/CryptoRanks';
import BrandedButton from '../components/BrandedButton';

type Props = {}

const Home: NextPage<Props> = ({ }) => {
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

    <div className='w-full mx-auto max-w-7xl h-full text-white flex flex-col items-start  justify-between'>
      <Head>
        <title>XCademy Price Tracker</title>
        <meta name="description" content="Price Tracker & Address Converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-24'>
        <Card className='max-w-xl border-gray-600 bg-transparent px-6 flex-1 flex flex-col items-start justify-between w-full py-8 text-gray-100 backdrop-blur-sm'>
          <h2 className="text-2xl font-bold tracking-tight text-white">Address:</h2>
          <Label className='text-gray-200'>Seamlessly check your balance</Label>
          <Input
            placeholder='Bech32 Address'
            value={bech32Address}
            onChange={(e) => handleAddressConversion(e.target.value)}
            className='max-w-xl mt-4'
            type='text'
          />
          <h2 className="text-2xl font-bold tracking-tight text-white mt-6">Base16:</h2>
          <Label className='text-gray-200'>This is your Base16 address</Label>
          <Input
            placeholder='Hex Address'
            value={base16Address}
            disabled
            className='max-w-xl my-4'
            type='text'
          />

          <BrandedButton text='Get Balance' onClick={() => fetchBalance(base16Address)} />
        </Card>

        <Card className='max-w-xl border-gray-600 bg-transparent px-6 flex-1 flex flex-col items-start justify-between w-full py-8 text-gray-100 backdrop-blur-sm'>
          <h2 className="text-2xl font-bold tracking-tight text-white">XCAD Price:</h2>
          <Label className='text-gray-200'>XCAD is currently trading at:</Label>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <div className='flex flex-col items-center justify-center'>
              <CoinGecko/>
              <span className='text-2xl font-bold mt-2'>{prices.coingecko ? `$${prices.coingecko}` : 'Loading...'}</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <ZilStream/>
              <span className='text-2xl font-bold mt-2'>{prices.zilStream ? `$${prices.zilStream}` : 'Loading...'}</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <CryptoRanks/>
              <span className='text-2xl font-bold mt-2'>{prices.cryptoRank ? `$${prices.cryptoRank}` : 'Loading...'}</span>
            </div>  
          </div>
          <div className='my-4'>
            <span className='text-2xl font-bold'>Average:</span>
            <span className='text-2xl font-bold ml-2'>{prices.average ? `$${prices.average}` : 'Loading...'}</span>
          </div>
          <BrandedButton text="Get Price" onClick={fetchPrice} />
        </Card>


      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default Home;

