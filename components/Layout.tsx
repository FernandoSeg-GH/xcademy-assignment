import React from 'react'
import { Navbar } from './Navbar';
import Image from "next/image"

import Link from "next/link"
import { cn } from '../utils/utils'; 
import { buttonVariants } from './ui/button';
import { Separator } from '@radix-ui/react-separator';


// interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
//   items: {
//     href: string
//     title: string
//   }[]
// }

// export function SidebarNav({ className, items, ...props }: SidebarNavProps) {

//   return (
//     <nav
//       className={cn(
//         "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
//         className
//       )}
//       {...props}
//     >
//       {items.map((item) => (
//         <Link
//           key={item.href}
//           href={item.href}
//           >
//           <span
//             className={cn(
//               buttonVariants({ variant: "ghost" }),
//               window.location.pathname === `${item.href}` || window.location.pathname === `${item.href}/`
//                 ? "bg-muted hover:bg-muted"
//                 : "hover:bg-transparent hover:underline",
//               "justify-start"
//             )}
//           >
//           {item.title}
//           </span>
//         </Link>
//       ))}
//     </nav>
//   )
// }

// const sidebarNavItems = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Account",
//     href: "/account",
//   },
//   {
//     title: "Notifications",
//     href: "/notifications",
//   },
// ]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: SettingsLayoutProps) {
  return (
    <>
    <body className='mx-auto max-w-7xl pt-24'>
      <Navbar />
      {/* <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside> */}
      <div className="w-full lg:max-w-7xl">{children}</div>
    </body>
    <style>{`
      body {
        background-image: url("/xcad-bg.png");
        background-color: #000;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflw-y: scroll;
      }
    `}</style>
    </>
  )
}