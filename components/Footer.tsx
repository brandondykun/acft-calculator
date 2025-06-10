"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-900 border-t border-t-stone-800 border-solid text-stone-400 px-4 py-8 md:px-6 bg-opacity-70">
      <div className="lg:flex justify-between max-w-4xl m-auto gap-12">
        <div className="text-stone-500 text-xl flex flex-col xs:items-center justify-center mb-8 lg:mb-0 flex-1">
          <div>ARMY AFT CALCULATOR</div>
        </div>
        <div className="xs:flex justify-center gap-12 flex-2">
          <div className="sm:flex gap-12">
            <div className="flex flex-col mb-8 lg:mb-0">
              <div className="text-stone-200 mb-3 hover:cursor-default font-bold">
                PAGES
              </div>
              <Link href="/" legacyBehavior passHref>
                <span className="hover:underline hover:cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about" legacyBehavior passHref>
                <span className="hover:underline hover:cursor-pointer">
                  About
                </span>
              </Link>
            </div>

            <div className="flex flex-col mb-8 lg:mb-0">
              <div className="text-stone-200 mb-3 hover:cursor-default font-bold">
                TOOLS
              </div>
              <Link href="/aft-calculator" legacyBehavior passHref>
                <span className="hover:underline hover:cursor-pointer">
                  AFT Calculator
                </span>
              </Link>
              <Link href="/calculator" legacyBehavior passHref>
                <span className="hover:underline hover:cursor-pointer">
                  ACFT Calculator
                </span>
              </Link>
              <Link href="/min-max" legacyBehavior passHref>
                <span className="hover:underline hover:cursor-pointer">
                  Min/Max
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-8 lg:mb-0">
              <div className="text-stone-200 mb-3 hover:cursor-default font-bold">
                EVENTS
              </div>
              <div className="md:flex gap-12">
                <div className="flex flex-col">
                  <Link href="/mdl" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Max Deadlift
                    </span>
                  </Link>
                  <Link href="/spt" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Standing Power Throw
                    </span>
                  </Link>
                  <Link href="/hrp" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Hand Release Pushup
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col">
                  <Link href="/sdc" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Sprint Drag Carry
                    </span>
                  </Link>
                  <Link href="/plk" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Plank
                    </span>
                  </Link>
                  <Link href="/tmr" legacyBehavior passHref>
                    <span className="hover:underline hover:cursor-pointer">
                      Two Mile Run
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
