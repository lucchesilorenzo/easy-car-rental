import Header from "@/components/Header";
import "@/styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "Welcome / Easy Car Rental",
    template: "%s / Easy Car Rental",
  },
  description: "Car Rental App",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-zinc-800 text-gray-100 min-h-screen relative antialiased`}
      >
        <Header />
        <main className="max-w-7xl mx-auto w-full mt-16 mb-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
