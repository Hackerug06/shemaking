import { NavBar } from "@/components/nav-bar"
import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Artist Name - Official Website",
  description: "Welcome to the official website of Artist Name. Explore music, upcoming events, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

