import { Geist, Geist_Mono ,Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";


const inter = Inter({ subsets: ["latin"] });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Vehiql",
  description: "Find Your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >

       <Header />
    
        <main className="min-h-screen">{children}</main>

        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with Love By Vedant Dagade</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
