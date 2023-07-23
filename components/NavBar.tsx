"use client";

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
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <div className="border-b-stone-900 border-b border-b-solid p-1">
      <NavigationMenu>
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
            <NavigationMenuContent>
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
    </div>
  );
};

export default NavBar;
