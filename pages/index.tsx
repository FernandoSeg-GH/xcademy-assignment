import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto';
import { BrowserProvider, ethers, JsonRpcSigner, Log } from "ethers";
import Hero from '../components/Hero';
import { DynamicTabs } from '../components/DynamicTabs';
import PriceChart from '../components/PriceChart';

type Props = {}

const Home: NextPage<Props> = ({ }) => {
  const [inputAddress, setInputAddress] = useState('');
  const [bech32Address, setBech32Address] = useState('');
  const [base16Address, setBase16Address] = useState('');
  const [prices, setPrices] = useState({
    coingecko: null,
    zilStream: null,
    cryptoRank: null,
    average: null,
    last7DaysCryptoRankPrices: [],
  });
  const [balance, setBalance] = useState<string | null>(null);
  const [dailyBalance, setDailyBalance] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });
  const [userAddress, setUserAddress] = useState<string>('');
  const [refreshCounter, setRefreshCounter] = useState(300); 

  // Traer el precio de XCAD
  const fetchPrice = async () => {
    try {
      const response = await fetch('/api/price');
      const data = await response.json();
      setPrices(data.prices);
      setDailyBalance(data?.prices?.last7DaysCryptoRankPrices);
      setData(data?.prices?.last7DaysCryptoRankPrices); 
      console.log("Daily Balance", dailyBalance);
    } catch (error) {
      console.error('Failed to fetch prices');
      openToast('Failed to fetch prices', 'error');
    }
  };

  // Traer el precio de XCAD al cargar la página
  useEffect(() => {
    fetchPrice(); // 
  }, []);

  useEffect(() => {
    if (prices.last7DaysCryptoRankPrices) {
      const chartData = prices.last7DaysCryptoRankPrices.map((price, index) => ({
        day: `Day ${index + 1}`,
        price: price
      }));
      setData(chartData);
    }
  }, [prices, dailyBalance]);

  // chequear si metamask está instalado
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
  const startRefreshTimer = () => {
    const timer = setInterval(() => {
      setRefreshCounter((prevCounter) => {
        if (prevCounter === 1) {
          clearInterval(timer);
          fetchPrice();
          setRefreshCounter(10);
        }
        return prevCounter - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    fetchPrice(); 
    // set timer a 5 minutes
    const timer = setTimeout(() => {
      startRefreshTimer();
    }, 300000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (refreshCounter === 0) {
      setData(data);
    }
  }, [refreshCounter, data]);


  const openToast = (message: string, severity: any = 'info') => {
    setToast({ open: true, message, severity });
  };

  return (
    <>
      <Head>
        <title>XCademy Price Tracker</title>
        <meta name="description" content="Price Tracker & Address Converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-[90%] md:w-full mx-auto max-w-7xl h-full text-white flex flex-col items-center justify-between pb-24'>

        <Hero />
       
        <DynamicTabs 
          bech32Address={bech32Address} 
          base16Address={base16Address} 
          handleAddressConversion={handleAddressConversion} 
          fetchBalance={fetchBalance} 
          prices={prices} 
          fetchPrice={fetchPrice} 
          refreshCounter={refreshCounter}
        />

      {data && <PriceChart data={data} />}

      </main>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default Home;

