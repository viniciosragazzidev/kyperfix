"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Bell, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DarkModeToggle } from "../dark-mode-toogle";
import Profile01 from "./profile-01";
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function TopNav() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "megatommusic", href: "#" },
    { label: "dashboard", href: "#" },
  ];

  return (
    <div className="relative h-16">
      <nav className="px-3 sm:px-6  flex items-center justify-between bg-background border-b border-gray-200 dark:border-[#1F1F23] h-full">
        <div className="font-medium text-sm hidden sm:flex items-center space-x-1 truncate max-w-[300px]">
          {breadcrumbs.map((item, index) => (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400 mx-1" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-gray-100">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
          <button
            type="button"
            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
          </button>

          <DarkModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Image
                src={"https://i.imgur.com/EaQYVOr.png"}
                alt="User avatar"
                width={28}
                height={28}
                className="rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
            >
              <Profile01 />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
