import { Tabs } from "./ui/tabs"
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import BrandedButton from "./BrandedButton"
import CoinGecko from "./icons/CoinGecko"
import PriceButton from "./PriceButton"
import ZilStream from "./icons/ZilStream"
import CryptoRanks from "./icons/CryptoRanks"
import { formatPrice } from "../utils/utils"
import { useState } from "react"

type Props = {
  bech32Address: string;
  base16Address: string;
  handleAddressConversion: (address: string) => void;
  fetchBalance: (address: string) => void;
  prices: {
    coingecko: number | null;
    zilStream: number | null;
    cryptoRank: number | null;
    average: number | null;
  };
  fetchPrice: () => void;
  refreshCounter: number;
} 

export function DynamicTabs({ bech32Address, base16Address, handleAddressConversion, fetchBalance, prices, fetchPrice, refreshCounter }: Props) {
  const [selectedTab, setSelectedTab] = useState('price');

  // Function to handle tab change
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Tabs defaultValue="price" className="w-full max-w-2xl"  onValueChange={handleTabChange}>
      
      <TabsList className="grid w-full grid-cols-2 gap-4 mb-6">  
        <TabsTrigger 
          value="price" 
          className={selectedTab === "price" ? "relative inline-flex min-w-60 whitespace-nowrap overflow-hidden text-lg font-semibold border-2 text-gray-900 rounded-lg group bg-gradient-to-br bg-black from-pink-400 to-red-400 group-hover:from-pink-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" : " hover:bg-gray-600 hover:bg-opacity-20 py-2 h-full w-full border border-gray-800 rounded-lg"}
        >
          <span className={selectedTab === "price" ? "relative w-full h-full transition-all inline-flex items-center justify-center ease-in duration-75 dark:bg-gray-900 rounded-md bg-black/80 group-hover:bg-opacity-0 text-gray-100" : " hover:bg-gray-600 hover:bg-opacity-20 h-full w-full"}>
            Price
            </span>
        </TabsTrigger>
        <TabsTrigger 
          value="balance" 
          className={selectedTab === "balance" ? "relative inline-flex min-w-60 whitespace-nowrap overflow-hidden text-lg font-semibold border-2 text-gray-900 rounded-lg group bg-gradient-to-br bg-black from-pink-400 to-red-400 group-hover:from-pink-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" : " hover:bg-gray-600 hover:bg-opacity-20 py-2 h-full w-full border border-gray-800 rounded-lg"}
        >
          <span className={selectedTab === "balance" ? "relative w-full h-full transition-all inline-flex items-center justify-center ease-in duration-75 dark:bg-gray-900 rounded-md bg-black/80 group-hover:bg-opacity-0 text-gray-100" : " hover:bg-gray-600 hover:bg-opacity-20 h-full w-full"}>
            Get Balance
            </span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="price">
        <Card className='max-w-7xl border-gray-600 bg-transparent px-6 flex-1 flex flex-col items-start justify-between w-full py-8 text-gray-100 backdrop-blur-sm'>
          <CardHeader>
            <h2 className="text-2xl font-bold tracking-tight text-white">XCAD Prices</h2>
          </CardHeader>
          <CardContent className="w-full">
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-3 gap-x-4 mt-8 mb-6' >
              <div className='flex flex-col items-center justify-start'>
                <CoinGecko/>
                <PriceButton content={<span className='text-xl font-bold'>{prices.coingecko ? `$ ${formatPrice(prices.coingecko)}` : 'Loading...'}</span>}  /> 
              </div>
              <div className='flex flex-col items-center justify-start'>
                <ZilStream/>
                <PriceButton content={<span className='text-xl font-bold'>{prices.zilStream ? `$ ${formatPrice(prices.zilStream)}` : 'Loading...'}</span>} />
              </div>
              <div className='flex flex-col items-center justify-start'>
                <CryptoRanks/>
                <PriceButton content={<span className='text-xl font-bold'>{prices.cryptoRank ? `$ ${formatPrice(prices.cryptoRank)}` : 'Loading...'}</span>} />
              </div>  
            </div>
          </CardContent>
          <CardFooter className='my-4 flex items-center jusify-between w-full'>
            <div className='flex-1'>
              <span className='text-xl font-light'>Average Current Price:</span>
              <span className='text-xl font-semibold ml-2'>
                {prices.average ? `$${formatPrice(prices.average)}` : 'Loading...'}
              </span>
            </div>
            <BrandedButton text="Update Prices" onClick={fetchPrice} />
          </CardFooter>
          <div className="text-gray-400 text-sm text-center w-full">
            Refreshing in 5 minutes
          </div>
        </Card>
      </TabsContent>


      <TabsContent value="balance">
        <Card className='max-w-7xl border-gray-600 bg-transparent px-6 flex-1 flex flex-col items-start justify-between w-full py-8 text-gray-100 backdrop-blur-sm'>
          <CardHeader>
          <h2 className="text-2xl font-bold tracking-tight text-white">Balance Check:</h2>
            <Label className='text-gray-200'>Seamlessly check your balance</Label>
          </CardHeader>
          <CardContent className="w-full">
            <Input
              placeholder='Bech32 Address'
              value={bech32Address}
              onChange={(e) => handleAddressConversion(e.target.value)}
              className='max-w-xl mt-4s'
              type='text'
            />

            <div className="border border-dashed border-gray-400 p-4 rounded-md mt-6">
              <h2 className="text-xl font-bold tracking-tight text-white">Base16:</h2>
              <Label className='text-md text-gray-200'>This is your Base16 address</Label>
              <Input
                placeholder='Hex Address'
                value={base16Address}
                disabled
                className='max-w-xl my-4'
                type='text'
              />
            </div>
          </CardContent>
          <CardFooter className='my-4 flex items-center jusify-between w-full'>
            <div className='flex-1'>
              <span className='text-xl font-light'>Find out your current balance:</span>
            </div>
            <BrandedButton text='Get Balance' onClick={() => fetchBalance(base16Address)} />
          </CardFooter>
        </Card>
      </TabsContent>

    </Tabs>
  )
}
