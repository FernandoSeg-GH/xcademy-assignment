import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='md:flex md:items-center text-center md:justify-between w-full max-w-2xl mb-24'>
        <div className=''>
        <h1 className="text-5xl font-bold mb-3 text-white leading-none" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
            THE {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600">
              #WATCH2EARN
            </span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              REVOLUTION
            </span>
          </h1>
          <p className="mb-6 font-light">
            XCAD Network is pioneering the #Watch2Earn revolution for 2.1bn active YouTube users,
            enabling fans to earn Creator token rewards for watching their favorite Creators.
          </p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-600 to-orange-400 group-hover:from-pink-600 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 hover:cursor-not-allowed" disabled>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-gray-100">
              Watch Our Video
            </span>
          </button>
        </div>
      </div>
  )
}