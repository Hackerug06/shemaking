import { AnimatedHeading } from "@/components/animated-heading.tsx"
import { UpcomingEvents } from "@/components/upcoming-events.tsx"

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AnimatedHeading className="text-center">Events</AnimatedHeading>
      <p className="text-center mb-8">Check out Artist Name's upcoming concerts and appearances.</p>
      <UpcomingEvents />
    </main>
  )
}

