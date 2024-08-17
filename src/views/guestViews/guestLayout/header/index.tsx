"use client";
import Link from "next/link";
import { useProductContext } from "../../../../../context/ProductContext";
import Image from "next/image"; //optimized image

const Header = () => {
  const { prodDetails } = useProductContext();

  return (
    <div className="sticky top-0 z-30 w-full bg-white/50 backdrop-blur-md">
      <header className="border-[2.2px] border-dotted border-gradient-to-r from-yellow-400 via-orange-400 to-red-400 z-30 mx-auto flex h-16 w-full max-w-screen-desktop items-center justify-between px-6 py-4 desktop:px-4 desktop:py-2 svelte-riq23s">
        <Link href="/">
          <Image height={64} width={64} src="/images/logo.png" alt="/logo" />
        </Link>
        <Link href="/products">
          <div className="relative inline-block">
            <Image height={28} width={28} src="/images/cart.svg" alt="cart" />
            {prodDetails.length > 0 && (
              <span className="cursor-pointer absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                {prodDetails.length}
              </span>
            )}
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
