import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LogOut, Settings, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <section className=" flex items-center justify-between  border px-6 py-4 lg:px-10">
      {/* Logo */}
      <div>
        <div
         
          className="flex items-center btn btn-sm gap-2 text-4xl font-bold "
        >
          <ShoppingBag className="size-10" />
          <span className="hidden sm:inline">BurGer</span>
        </div>
      </div>
      {/* right side */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer outline rounded-2xl px-2 w-[150px]">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* admin or user or seller */}
              <div className="space-y-0.5">
                <h4 className="">Guest Admin</h4>
                <h6 className="text-green-400">Guest</h6>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 cursor-pointer px-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  {/* admin or user or seller */}
                  <div>
                    <h4 className="font-medium">Guest Admin</h4>
                    <h6 className="text-green-400 font-semibold">Guest</h6>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="pb-2.5 text-[16px] font-semibold">
                  Welcome back admin 🎉
                </h1>
                <div className="space-y-2.5">
                  {/* settings */}
                  <Link
                    href="/about"
                    className="flex items-center btn btn-sm gap-2 bg-gray-200 w-[250px] rounded-xl px-4 py-1"
                  >
                    <Settings className="size-5" />
                    <span className="hidden sm:inline">Settings</span>
                  </Link>
                  {/* SignOut */}
                  <Link
                    href="/about"
                    className="flex items-center btn btn-sm gap-2 bg-red-200 w-[250px] rounded-xl px-4 py-1"
                  >
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Link>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
