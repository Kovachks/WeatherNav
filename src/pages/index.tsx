import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <NavBar />
      <Search />
    </main>
  );
}
