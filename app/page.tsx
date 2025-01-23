import { ArtistProfile } from "@/components/artist-profile"
import { SongList } from "@/components/song-list"
import { UpcomingEvents } from "@/components/upcoming-events"
import { AnimatedHeading } from "@/components/animated-heading"

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

