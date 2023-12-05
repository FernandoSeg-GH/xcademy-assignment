/**
 * Query Contract Balances from the Zilliqa Chain
 * 
 * Use the "@zilliqa-js/zilliqa" package to query the defined contract below and get the state.
 * The state will return all mutable fields on a smart contract and their current values.
 * 
 * Modify the handler below to accept an "address" string.
 * Query the defined contract below to get the current state.
 * Find and return the balance of the "address".
 */


import type { NextApiRequest, NextApiResponse } from 'next';
import { Zilliqa } from '@zilliqa-js/zilliqa';
import { fromBech32Address } from '@zilliqa-js/crypto';

type ResponseData = {
  balance: string | null;
  error?: string;
};

const zilliqa = new Zilliqa('https://api.zilliqa.com/');
const tokenAddress = 'zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { address } = req.query;
  console.log('address', address);

  if (!address) {
    console.log('No address provided'); 
    return res.status(400).json({ balance: null, error: 'Address is required' as any });
  }

  try {
    console.log('Fetching balance...');
    let base16Address: string;

    if (typeof address === 'string' && address.startsWith('zil')) {
      base16Address = fromBech32Address(address).toLowerCase();
    } else {
      base16Address = address as string;
    }

    console.log('base16Address', base16Address);
    const contract = zilliqa.contracts.at(tokenAddress);
    console.log('contract', contract);
    const state = await contract.getState();
    console.log("Balance Responses", {
      state: state as any,
      balances: state.balances as any,
      base16Address: base16Address as any
    });

    const balance = state.balances[base16Address] || '0';
    console.log('balance', balance);
    res.status(200).json({ balance });
  } catch (error: any) {
    console.error(error, 'Error fetching balance');
    res.status(500).json({ balance: null, error: error as any });
  }
}
