import { AnimatedHeading } from "@/components/animated-heading.tsx"
import { ArtistProfile } from "@/components/artist-profile.tsx"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AnimatedHeading className="text-center">About Artist Name</AnimatedHeading>
      <p className="text-center mb-8">Learn more about Artist Name's journey, influences, and achievements.</p>
      <ArtistProfile />
    </main>
  )
}

