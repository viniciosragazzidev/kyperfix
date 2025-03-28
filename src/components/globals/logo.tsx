import logo from "@/public/Logo.png";
import { Tajawal } from "next/font/google";
import Image from "next/image";
const tajawal = Tajawal({ subsets: ["latin"], weight: "800" });

type LogoProps = {
  size?: "base" | "md" | "lg";
  type?: "dark" | "light";
  mode?: "simple" | "full";
};

const Logo = ({ size = "base", type = "dark", mode = "full" }: LogoProps) => {
  return (
    <h1
      className={
        tajawal.className +
        ` ${
          size === "base" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"
        }  gap-2 items-center mr-10 flex ${type} `
      }
    >
      <div
        className={`  relative rounded-sm overflow-hidden bg-white ${
          size === "base"
            ? "w-4.5 h-5"
            : size === "md"
            ? "w-5.5 h-6"
            : "w-6.5 h-7"
        } `}
      >
        <Image
          className={`${
            size === "base" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-7 h-7"
          }`}
          src={logo}
          alt="Logo"
        />
      </div>
      <span className={`${mode === "simple" ? "hidden" : ""}`}>
        Kyper<span className="text-foreground/80">Fix</span>
      </span>
    </h1>
  );
};

export default Logo;
