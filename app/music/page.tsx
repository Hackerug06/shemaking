import { AnimatedHeading } from "@/components/ui/animated-heading"
import { SongList } from "@/components/ui/song-list"

export default function Music() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AnimatedHeading className="text-center">Music</AnimatedHeading>
      <p className="text-center mb-8">Explore Artist Name's discography and latest releases.</p>
      <SongList />
    </main>
  )
}

    
