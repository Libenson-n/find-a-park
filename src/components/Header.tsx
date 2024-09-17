import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between border-b px-10 shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="h-[50px] w-[50px]"
        />
      </Link>
      <div className="flex gap-4">
        <SignedOut>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-800">
            <SignInButton mode="modal">Sign In</SignInButton>
          </Button>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-800">
            <SignUpButton mode="modal">Sign Up</SignUpButton>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
