import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { MobileSidebar } from './MobileSidebar';
import { cn } from '../utils/utils';
import BrandedButton from './BrandedButton';


interface NavbarProps {
}

export const Navbar = ({
}: NavbarProps) => {
  
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-2 px-6 h-16 border-b-4 border-primary/10 text-white backdrop-blur-xl">

      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <MobileSidebar />
        <div className="w-full flex items-center">
          <Link href="/">
            <h1 className={cn("hidden")}>
              XCademy Price Tracker
            </h1>
          </Link>
            <img src="https://www.xcademy.com/defc893fd64646d3b86cab2b41ca55a6.png" alt="logo" className='hidden md:block h-8 w-auto' />
        </div>
        <div>
          <div className='hidden md:flex first-letter:flex items-center justify-between font-light gap-x-6'>
              <Link href={`/`}>
                Home
              </Link>

              <Link href="/about">
                About
              </Link>
              
              <BrandedButton text='Buy XCAD' />
          </div>
        </div>
      </div>
    </div>
  );
}
