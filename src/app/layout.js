import { Inter } from "next/font/google";
import "./globals.css";
import "../app/home.css";
import Nav from "@/Components/navComp/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="homePage-container">
          <div className="nav-style">
            <div className="pageName">My Watch List</div>
            <Nav />
          </div>
          <div className={inter.className}>{children}</div>
        </div>
      </body>
    </html>
  );
}
//Press Ctrl + shift + r to refresh
