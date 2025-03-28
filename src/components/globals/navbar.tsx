"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./dark-mode-toogle";
import LiText from "./li_text";
import Logo from "./logo";

const Navbar = () => {
  const path = usePathname();
  const containDashboard = path.includes("dashboard");

  if (containDashboard) {
    return null;
  }
  return (
    <nav className="fixed top-0 left-0 z-[100] w-full px-4  ">
      <div className=" w-full">
        <div className=" flex h-16 items-center max-w-7xl mx-auto">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex items-center space-x-6 mr-4 text-sm font-medium xl:flex ">
            <LiText> Dashboard</LiText>
            <LiText> Preços</LiText>
            <LiText>Sobre</LiText>
          </ul>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            <DarkModeToggle />

            <span className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 transition-colors hover:text-foreground/80 text-foreground/60 ">
              <MagnifyingGlass size={18} />
            </span>
            <LiText className="text-sm">
              <Link href="/signin">Login</Link>
            </LiText>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
