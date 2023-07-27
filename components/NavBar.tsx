"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseMenuLink = ({ href, setOpen, children }: Props) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <span onClick={() => setOpen(false)} className="text-xl py-1 underline">
        {children}
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-stone-900 border-b border-b-solid p-1">
      <NavigationMenu className="md:block hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                <span className="w-full text-left">Calculator</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Events</NavigationMenuTrigger>
            <NavigationMenuContent className="w-[230px]">
              <Link href="/mdl" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">Max Dead Lift</span>
                </NavigationMenuLink>
              </Link>
              <Link href="/spt" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">
                    Standing Power Throw
                  </span>
                </NavigationMenuLink>
              </Link>
              <Link href="/hrp" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">
                    Hand Release Pushup
                  </span>
                </NavigationMenuLink>
              </Link>
              <Link href="/sdc" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">Sprint Drag Carry</span>
                </NavigationMenuLink>
              </Link>
              <Link href="/plk" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">Plank</span>
                </NavigationMenuLink>
              </Link>
              <Link href="/tmr" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} w-[200px]`}
                >
                  <span className="text-left w-[180px]">Two Mile Run</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/min-max" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                <span className="w-full text-left">Min/Max</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden flex justify-end items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2">
            <Menu color="#f5f5f4" />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="text-stone-300 flex flex-col pt-4">
              <CloseMenuLink href="/home" setOpen={setOpen}>
                Home
              </CloseMenuLink>
              <div className="flex items-center gap-2 mt-6 mb-2">
                <div className="text-stone-500 tracking-wider w-fit">TOOLS</div>
                <div className="h-[1px] bg-stone-500 flex-1"></div>
              </div>
              <CloseMenuLink href="/" setOpen={setOpen}>
                Calculator
              </CloseMenuLink>
              <CloseMenuLink href="/min-max" setOpen={setOpen}>
                Min/Max
              </CloseMenuLink>
              <div className="flex items-center gap-2 mt-6 mb-2">
                <div className="text-stone-500 tracking-wider w-fit">
                  EVENTS
                </div>
                <div className="h-[1px] bg-stone-500 flex-1"></div>
              </div>
              <CloseMenuLink href="/mdl" setOpen={setOpen}>
                Max Dead Lift
              </CloseMenuLink>
              <CloseMenuLink href="/spt" setOpen={setOpen}>
                Standing Power Throw
              </CloseMenuLink>
              <CloseMenuLink href="/hrp" setOpen={setOpen}>
                Hand Release Pushup
              </CloseMenuLink>
              <CloseMenuLink href="/sdc" setOpen={setOpen}>
                Sprint Drag Carry
              </CloseMenuLink>
              <CloseMenuLink href="/plk" setOpen={setOpen}>
                Plank
              </CloseMenuLink>
              <CloseMenuLink href="/tmr" setOpen={setOpen}>
                Two Mile Run
              </CloseMenuLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
