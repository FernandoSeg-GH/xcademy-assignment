import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  prices: number | null;
  error?: string | null | any;
};

async function fetchPrice(url: string) {
  const response = await fetch(url as string);
  if (!response.ok) throw new Error('Failed to fetch price');
  return response.json();
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    console.log('Fetching prices...');
    const [coingeckoData, zilStreamData, cryptoRankData] = await Promise.all([
      fetchPrice('https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd'),
      fetchPrice('https://io-cdn.zilstream.com/chart/aggr/zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y'),
      fetchPrice('https://api.cryptorank.io/v0/charts/prices-by-coin?keys=xcad-network&days=7')
    ]);
    // console.log('Fetched prices', { coingeckoData, zilStreamData, cryptoRankData });

    // -----++++++-----++++------ 
    // Gettings prices for each source 
    // -----++++++-----++++------ 
    const coingeckoPrice = coingeckoData?.['xcad-network']?.usd;

    const zilStreamPrice = zilStreamData[0]?.value;

    const cryptoRankPricesArray = cryptoRankData.data['xcad-network'].prices;
    const newestCryptoRankPrice = cryptoRankPricesArray[cryptoRankPricesArray.length - 1];

    const averagePrice = (coingeckoPrice + zilStreamPrice + newestCryptoRankPrice) / 3;

    console.log({
      prices: {
        coingecko: coingeckoPrice as any,
        zilStream: zilStreamPrice as any,
        cryptoRank: newestCryptoRankPrice as any,
        average: averagePrice
      } as any
    })

    res.status(200).json({
      prices: {
        coingecko: coingeckoPrice as any,
        zilStream: zilStreamPrice as any,
        cryptoRank: newestCryptoRankPrice as any,
        average: averagePrice
      } as any
    });
  } catch (error:any) {
    console.error(error, "Error fetching prices");
    res.status(500).json({ prices: "error" as any, error: error.message });
  }
}