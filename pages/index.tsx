import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head' 
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
    
    <div >

        <div>
          <nav >
            <h1 style={{display:"none"}}>XCademy Price Tracker </h1>
            <img src="https://www.xcademy.com/defc893fd64646d3b86cab2b41ca55a6.png" alt="logo" width="300" height="50" />
            <h4>XCAD: 0.00</h4>
          </nav>
        </div>

      
      <div>
        <Head>
          <title>Address Converter</title>
          <meta name="description" content="Zilliqa Address Converter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div> 
          <div>
            <div>
              <input
                placeholder='Bech32 Address'
                value={bech32Address}
                onChange={(e) => handleAddressConversion(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder='Hex Address'
                value={base16Address}
                disabled
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <button onClick={fetchPrice}>Get CoinGecko Price</button>
            <button onClick={() => fetchBalance(base16Address)}>Get Balance</button>
          </div>
        </div>

        <Toaster open={toast.open} message={toast.message} severity={toast.severity as any} />

        {prices.coingecko && <p>Coingecko Price: {prices.coingecko}</p>}
        {prices.zilStream && <p>ZilStream Price: {prices.zilStream}</p>}
        {prices.cryptoRank && <p>CryptoRank Price: {prices.cryptoRank}</p>}
        {prices.average && <p>Average Price: {prices.average}</p>}

        
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
