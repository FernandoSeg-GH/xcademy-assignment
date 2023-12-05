
import { ButtonIcon } from "@radix-ui/react-icons"
import { Tabs } from "./ui/tabs"
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import BrandedButton from "./BrandedButton"
import CoinGecko from "./icons/CoinGecko"
import PriceButton from "./PriceButton"
import ZilStream from "./icons/ZilStream"
import CryptoRanks from "./icons/CryptoRanks"
import { formatPrice } from "../utils/utils"
import { useEffect, useState } from "react"

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
} 

export function DynamicTabs({ bech32Address, base16Address, handleAddressConversion, fetchBalance, prices, fetchPrice }: Props) {
  const [selectedTab, setSelectedTab] = useState('balance');

  // Function to handle tab change
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Tabs defaultValue="balance" className="w-full max-w-2xl"  onValueChange={handleTabChange}>

      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger 
          value="balance" 
          className={selectedTab === "balance" ? "mb-6 py-2 border border-gray-600 rounded-lg" : "mb-6"}
        >
          Get Balance
        </TabsTrigger>
        <TabsTrigger 
          value="price" 
          className={selectedTab === "price" ? "mb-6 py-2 border border-gray-600 rounded-lg" : "mb-6"}
        >
          Price
        </TabsTrigger>
      </TabsList>


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
              className='max-w-xl'
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
          </CardContent>
          <CardFooter className='my-4 flex items-center jusify-between w-full'>
            <div className='flex-1'>
              <span className='text-xl font-light'>Find out your current balance:</span>
            </div>
            <BrandedButton text='Get Balance' onClick={() => fetchBalance(base16Address)} />
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="price">
        <Card className='max-w-7xl border-gray-600 bg-transparent px-6 flex-1 flex flex-col items-start justify-between w-full py-8 text-gray-100 backdrop-blur-sm'>
          <CardHeader>
            <h2 className="text-2xl font-bold tracking-tight text-white">XCAD Prices</h2>
          </CardHeader>
          <CardContent className="w-full">
            <div className='grid grid-cols-3 gap-x-4 mt-8 mb-6' >
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
        </Card>
      </TabsContent>
    </Tabs>
  )
}
