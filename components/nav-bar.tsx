import Link from "next/link"
import Image from "next/image"
import { Home, Mic, Calendar, User } from "lucide-react"

export function NavBar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg animate-pulse">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative w-12 h-12">
            <Image src="/artist-logo.png" alt="Artist Logo" layout="fill" className="rounded-full animate-glow" />
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/" icon={<Home className="h-5 w-5" />} text="Home" />
            <NavLink href="/music" icon={<Mic className="h-5 w-5" />} text="Music" />
            <NavLink href="/events" icon={<Calendar className="h-5 w-5" />} text="Events" />
            <NavLink href="/about" icon={<User className="h-5 w-5" />} text="About" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-1 hover:text-secondary-foreground transition-colors duration-200"
    >
      {icon}
      <span className="hidden md:inline">{text}</span>
    </Link>
  )
}

