import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ArtistProfile() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Artist Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/artist-avatar.jpg" alt="Artist Name" />
          <AvatarFallback>AN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">Artist Name</h2>
          <p className="text-gray-500">Genre: Pop/Rock</p>
          <p className="mt-2">
            A brief bio of the artist goes here. Describe their style, influences, and achievements.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

