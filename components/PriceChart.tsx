import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from './ui/card';
import { formatPrice } from '../utils/utils';

type Props = {
    data: any[];
}

export default function PriceChart({ data }: Props) {
    return (
        <Card className='w-full bg-transparent mt-8 py-6 max-w-2xl flex flex-col items-center border border-gray-600 justify-between backdrop-blur-md'>
            <h2 className='text-2xl font-bold text-gray-100 mb-4'>Price Chart</h2>
            <p className='text-gray-200 mb-4'>XCAD Performance - Last 7 days</p>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={
                        !data || data.length === 0 ? [
                            { day: 'Day 1', price: 0 },
                            { day: 'Day 2', price: 0 },
                            { day: 'Day 3', price: 0 },
                            { day: 'Day 4', price: 0 },
                            { day: 'Day 5', price: 0 },
                            { day: 'Day 6', price: 0 },
                            { day: 'Day 7', price: 0 },
                        ] as any[] :
                            data.map((item, index) => {
                                return {
                                    day: `Day ${index + 1}`,
                                    price: formatPrice(item),
                                };
                            })
                    }
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tick={{ fontSize: 12, dy: 10 }} />
                    <YAxis domain={['dataMin', 'dataMax']} tick={{ fontSize: 12, dx: -10 }} />
                    <Tooltip contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius: '10px',
                        backdropFilter: 'blur(3px)'
                    }}
                        itemStyle={{ color: '#fff' }}
                        labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    )
}