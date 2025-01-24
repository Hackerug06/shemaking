import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { date: "2023-07-15", venue: "Central Park", city: "New York, NY" },
  { date: "2023-07-22", venue: "Hollywood Bowl", city: "Los Angeles, CA" },
  { date: "2023-07-29", venue: "Red Rocks Amphitheatre", city: "Morrison, CO" },
]

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{event.venue}</p>
                <p className="text-sm text-gray-500">{event.city}</p>
              </div>
              <p className="text-sm">{event.date}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

  
