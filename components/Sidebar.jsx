import Image from "next/image";
import React from "react";
import { ImUsers } from "react-icons/im";
import { MdExpandMore, MdGroups, MdOndemandVideo, MdOutlineExpandMore } from 'react-icons/md'
import { AiOutlineShop} from 'react-icons/ai'
import SidebarItem from "./SidebarItem";
import {BsStopwatch} from 'react-icons/bs'
import { useSession, signOut } from "next-auth/react";
const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-300 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user?.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">{session?.user?.name?.split(" ")[0]}</p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
      <SidebarItem Icon={MdOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See More" />

    </div>
  );
};

export default Sidebar;
