"use client";

import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="sticky top-0 z-10 shadow backdrop-blur dark:bg-gray-900 dark:bg-opacity-80 dark:shadow-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4  ">
        {/* LOGO */}
        <Logo />

        <div className="flex items-center  md:hidden">
          <ThemeToggler />
          {/* Bars */}
          <MenuButton isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>

        {/* NAVBAR */}
        <div className={`${isCollapsed && "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-transparent">
            <li>
              <MenuItem href="/">Home</MenuItem>
            </li>
            <li>
              <MenuItem href="/blog">Blog</MenuItem>
            </li>
            <li className="hidden md:block">
              <ThemeToggler />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/" className="text-xl font-bold dark:text-white md:text-2xl">
      <span className="text-blue-700 dark:text-blue-500 ">IMAD</span> MACHI
    </Link>
  );
}

function MenuButton({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: Function }) {
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      data-collapse-toggle="navbar-default"
      type="button"
      className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

function MenuItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "block rounded py-2 pl-3 pr-4 text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500",
        pathname == href && " text-blue-700 dark:text-blue-500"
      )}
      aria-current="page"
    >
      {children}
    </Link>
  );
}
