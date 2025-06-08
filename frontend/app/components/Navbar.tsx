// app/components/Navbar.tsx

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoCode } from "react-icons/io5";


export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 bg-white dark:bg-gray-900 flex justify-between items-center">
      <div className="text-xl font-bold">Pakistani School</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-base font-medium">
        <li>
          <Link href="/register-school">Register School</Link>
        </li>
        <li>
          <Button className="bg-[#008000]">
          <Link href="/for-devs" className="flex items-center gap-2">
         <IoCode />
          For Devs</Link>
          </Button>
        </li>
        
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8 text-lg">
              <Link href="/register-school">Register School</Link>
              <Link href="/for-devs" className="bg-[#008000]">For Devs</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
