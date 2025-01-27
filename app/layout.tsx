import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./app/globals.css"
import Navbar from "./app/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shema King👑",
  description: "Official website of artist Shema King👑",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

  
