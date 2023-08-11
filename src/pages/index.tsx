import Image from "next/image";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen justify-center items-center">
      <AuthProvider />
    </main>
  );
}
