import { AnimatedHeading } from "./components/ui/animated-heading"
import { UpcomingEvents } from "./components/ui/upcoming-events"

export default function Events() {
  return (
    <main className="container mx-auto px-4 py-8">
      <AnimatedHeading className="text-center">Events</AnimatedHeading>
      <p className="text-center mb-8">Check out Artist Name's upcoming concerts and appearances.</p>
      <UpcomingEvents />
    </main>
  )
}

      
