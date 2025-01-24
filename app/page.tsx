import { ArtistProfile } from "@/components/ui/artist-profile"
import { SongList } from "@/components/ui/song-list"
import { UpcomingEvents } from "@/components/ui/upcoming-events"
import { AnimatedHeading } from "@/components/ui/animated-heading"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AnimatedHeading className="text-4xl text-center">Welcome to Artist Name's Official Website</AnimatedHeading>
      <ArtistProfile />
      <SongList />
      <UpcomingEvents />
    </main>
  )
}

    
