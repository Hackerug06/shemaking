import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedHeading } from "@/components/ui/animated-heading"

export function ArtistProfile() {
  return (
    <Card className="mb-8 bg-gray-800 text-white">
      <CardHeader>
        <AnimatedHeading>Artist Profile</AnimatedHeading>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <Avatar className="h-24 w-24 animate-glow">
          <AvatarImage src="/artist-avatar.jpg" alt="Artist Name" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">Artist Name</h2>
          <p className="text-gray-300">Genre: Pop/Rock</p>
          <p className="mt-2">
            A brief bio of the artist goes here. Describe their style, influences, and achievements.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

  
