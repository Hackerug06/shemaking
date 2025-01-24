import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedHeading } from "@/components/ui/animated-heading"

const events = [
  { date: "2023-07-15", venue: "Central Park", city: "New York, NY" },
  { date: "2023-07-22", venue: "Hollywood Bowl", city: "Los Angeles, CA" },
  { date: "2023-07-29", venue: "Red Rocks Amphitheatre", city: "Morrison, CO" },
]

export function UpcomingEvents() {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <AnimatedHeading>Upcoming Events</AnimatedHeading>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <div>
                <p className="font-semibold">{event.venue}</p>
                <p className="text-sm text-gray-300">{event.city}</p>
              </div>
              <p className="text-sm">{event.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

   
