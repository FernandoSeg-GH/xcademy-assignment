import { Menu, VideoIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Home, User2Icon, LucideUsers, Landmark } from "lucide-react";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

interface SidebarProps { }

export const Sidebar = ({ }: SidebarProps) => {
  const router = useRouter();

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-primary ">
      <div className="p-3 flex-1 flex flex-col justify-start items-center">
        <div className="rounded-md border h-28 w-28 text-xs group flex justify-start items-center font-medium cursor-pointer my-2 text-gray-100 hover:text-100" onClick={() => router.push('/')}>
          <div className="hover:underline flex flex-col gap-y-2 items-center flex-1 whitespace-nowrap">
            <Home className="h-5 w-5 mb-1" />
            Home
          </div>
        </div>
        <div className="rounded-md border h-28 w-28 text-xs group flex justify-start items-center font-medium cursor-pointer my-2 text-gray-100 hover:text-100" onClick={() => router.push("/")}>
          <div className="hover:underline flex flex-col gap-y-2 items-center flex-1 whitespace-nowrap">
            <Landmark className="h-5 w-5 mb-1" />
            Academy
          </div>
        </div>
        <div className="rounded-md border h-28 w-28 text-xs group flex justify-start items-center font-medium cursor-pointer my-2 text-gray-100 hover:text-100" onClick={() => router.push("/")}>
          <div className="hover:underline flex flex-col gap-y-2 items-center flex-1 whitespace-nowrap">
            <VideoIcon className="h-5 w-5 mb-1" />
            Video Vault
          </div>
        </div>
        <div className="rounded-md border h-28 w-28 text-xs group flex justify-start items-center font-medium cursor-pointer my-2 text-gray-100 hover:text-100" onClick={() => router.push("/")}>
          <div className="hover:underline flex flex-col gap-y-2 items-center flex-1 whitespace-nowrap">
            <LucideUsers className="h-5 w-5" />
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileSidebar = ({ }: {}) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-primary text-gray-100 pt-10 w-38">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
